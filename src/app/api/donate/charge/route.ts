import { NextResponse } from "next/server";
import { initiateMomoCharge, paystackConfigured, MOMO_PROVIDERS, type MomoProvider } from "@/lib/paystack";

export const runtime = "nodejs";

const VALID_PROVIDERS = MOMO_PROVIDERS.map((p) => p.value);

export async function POST(request: Request) {
  if (!paystackConfigured()) {
    return NextResponse.json(
      { status: "unconfigured", message: "MoMo donations are not set up yet. Please use the MoMo number shown below." },
      { status: 503 },
    );
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ status: "failed", message: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.replace(/\s+/g, "") : "";
  const provider = body.provider as MomoProvider;
  const amountGhs = Number(body.amount);

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ status: "failed", message: "A valid email is required for your receipt." }, { status: 400 });
  }
  if (!phone || !/^0\d{9}$/.test(phone)) {
    return NextResponse.json({ status: "failed", message: "Enter a valid 10-digit mobile money number (e.g. 0541234567)." }, { status: 400 });
  }
  if (!VALID_PROVIDERS.includes(provider)) {
    return NextResponse.json({ status: "failed", message: "Choose your mobile money network." }, { status: 400 });
  }
  if (!Number.isFinite(amountGhs) || amountGhs < 1) {
    return NextResponse.json({ status: "failed", message: "Enter a donation amount of at least GHS 1." }, { status: 400 });
  }

  try {
    const result = await initiateMomoCharge({ email, amountGhs, phone, provider, name });
    return NextResponse.json(result);
  } catch (error) {
    console.error("MoMo charge failed:", error);
    return NextResponse.json({ status: "failed", message: "Something went wrong starting your donation." }, { status: 500 });
  }
}
