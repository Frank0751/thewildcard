import "server-only";

// ----------------------------------------------------------------------------
// Paystack Ghana Mobile Money helper.
//
// Requires PAYSTACK_SECRET_KEY in the environment (sk_test_... or sk_live_...).
// This drives the "direct MoMo" donation flow: we create a charge, the donor
// receives a prompt on their phone to authorize by entering their MoMo PIN,
// and we poll the transaction until it succeeds or fails.
//
// Provider codes are Paystack's Ghana mobile money identifiers. If a network
// code ever changes on Paystack's side, adjust MOMO_PROVIDERS below.
// ----------------------------------------------------------------------------

const PAYSTACK_BASE = "https://api.paystack.co";

export const MOMO_PROVIDERS = [
  { value: "mtn", label: "MTN Mobile Money" },
  { value: "vod", label: "Telecel Cash (Vodafone)" },
  { value: "atl", label: "AT Money (AirtelTigo)" },
] as const;

export type MomoProvider = (typeof MOMO_PROVIDERS)[number]["value"];

export function paystackConfigured(): boolean {
  return Boolean(process.env.PAYSTACK_SECRET_KEY);
}

function secretKey(): string {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) throw new Error("PAYSTACK_SECRET_KEY is not set");
  return key;
}

async function paystackFetch(path: string, init?: RequestInit) {
  const res = await fetch(`${PAYSTACK_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${secretKey()}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });
  const json = await res.json().catch(() => ({}));
  return { ok: res.ok, json } as { ok: boolean; json: any };
}

export interface ChargeResult {
  status: string; // e.g. "send_otp", "pay_offline", "pending", "success", "failed"
  reference?: string;
  displayText?: string;
  message?: string;
}

// Initiate a mobile money charge. Amount is in GHS (whole cedis or decimals).
export async function initiateMomoCharge(params: {
  email: string;
  amountGhs: number;
  phone: string;
  provider: MomoProvider;
  name?: string;
}): Promise<ChargeResult> {
  const { ok, json } = await paystackFetch("/charge", {
    method: "POST",
    body: JSON.stringify({
      email: params.email,
      amount: Math.round(params.amountGhs * 100), // pesewas
      currency: "GHS",
      mobile_money: { phone: params.phone, provider: params.provider },
      metadata: {
        donor_name: params.name ?? "",
        purpose: "Donation to The Wild Card Project",
      },
    }),
  });

  if (!ok || !json?.data) {
    return { status: "failed", message: json?.message ?? "Could not start the charge." };
  }

  return {
    status: json.data.status,
    reference: json.data.reference,
    displayText: json.data.display_text ?? json.data.message,
    message: json.message,
  };
}

// Submit an OTP for networks that require it (e.g. some Vodafone flows).
export async function submitMomoOtp(params: { reference: string; otp: string }): Promise<ChargeResult> {
  const { ok, json } = await paystackFetch("/charge/submit_otp", {
    method: "POST",
    body: JSON.stringify({ reference: params.reference, otp: params.otp }),
  });
  if (!ok || !json?.data) {
    return { status: "failed", message: json?.message ?? "OTP could not be verified." };
  }
  return {
    status: json.data.status,
    reference: json.data.reference,
    displayText: json.data.display_text ?? json.data.message,
    message: json.message,
  };
}

export interface VerifyResult {
  status: string; // "success" | "failed" | "abandoned" | "ongoing" | "pending" | ...
  amountGhs?: number;
  message?: string;
}

export async function verifyTransaction(reference: string): Promise<VerifyResult> {
  const { ok, json } = await paystackFetch(`/transaction/verify/${encodeURIComponent(reference)}`);
  if (!ok || !json?.data) {
    return { status: "failed", message: json?.message ?? "Could not verify the transaction." };
  }
  return {
    status: json.data.status,
    amountGhs: typeof json.data.amount === "number" ? json.data.amount / 100 : undefined,
    message: json.data.gateway_response ?? json.message,
  };
}
