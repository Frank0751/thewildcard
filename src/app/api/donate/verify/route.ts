import { NextResponse } from "next/server";
import { verifyTransaction, paystackConfigured } from "@/lib/paystack";

export const runtime = "nodejs";

export async function GET(request: Request) {
  if (!paystackConfigured()) {
    return NextResponse.json({ status: "unconfigured" }, { status: 503 });
  }

  const { searchParams } = new URL(request.url);
  const reference = searchParams.get("reference");
  if (!reference) {
    return NextResponse.json({ status: "failed", message: "Missing reference." }, { status: 400 });
  }

  try {
    const result = await verifyTransaction(reference);
    return NextResponse.json(result);
  } catch (error) {
    console.error("MoMo verify failed:", error);
    return NextResponse.json({ status: "failed", message: "Could not verify the transaction." }, { status: 500 });
  }
}
