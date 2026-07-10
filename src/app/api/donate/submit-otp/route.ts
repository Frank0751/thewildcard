import { NextResponse } from "next/server";
import { submitMomoOtp, paystackConfigured } from "@/lib/paystack";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!paystackConfigured()) {
    return NextResponse.json({ status: "unconfigured" }, { status: 503 });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ status: "failed", message: "Invalid request." }, { status: 400 });
  }

  const reference = typeof body.reference === "string" ? body.reference : "";
  const otp = typeof body.otp === "string" ? body.otp.trim() : "";

  if (!reference || !otp) {
    return NextResponse.json({ status: "failed", message: "Enter the code you received." }, { status: 400 });
  }

  try {
    const result = await submitMomoOtp({ reference, otp });
    return NextResponse.json(result);
  } catch (error) {
    console.error("MoMo OTP failed:", error);
    return NextResponse.json({ status: "failed", message: "Could not verify the code." }, { status: 500 });
  }
}
