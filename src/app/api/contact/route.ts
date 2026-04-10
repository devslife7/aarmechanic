import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "tyler@anywhereautorepair.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "Anywhere Auto Repair <onboarding@resend.dev>";

interface ContactBody {
  name: string;
  phone: string;
  vehicle: string;
  vin?: string;
  fuel: string;
  issue: string;
  // honeypot — must be empty
  website?: string;
  // timestamp when form was rendered (ms)
  _t?: number;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json();

    // ── Bot filtering ──────────────────────────────
    // 1. Honeypot: if the hidden "website" field is filled, it's a bot
    if (body.website) {
      // Return 200 so bots think it worked
      return NextResponse.json({ ok: true });
    }

    // 2. Time-based: if form was submitted in under 3 seconds, likely a bot
    if (body._t && Date.now() - body._t < 3000) {
      return NextResponse.json({ ok: true });
    }

    // ── Validation ─────────────────────────────────
    const { name, phone, vehicle, vin, fuel, issue } = body;

    if (!name?.trim() || !phone?.trim() || !vehicle?.trim() || !issue?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!fuel || !["gas", "diesel"].includes(fuel)) {
      return NextResponse.json(
        { error: "Invalid fuel type" },
        { status: 400 }
      );
    }

    // ── Send email via Resend ──────────────────────
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Anywhere Auto Repair <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `New Quote Request from ${name.trim()}`,
      replyTo: undefined,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <h2 style="margin: 0 0 24px; font-size: 20px; color: #111;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escapeHtml(name.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${escapeHtml(phone.trim())}" style="color: #3b82f6;">${escapeHtml(phone.trim())}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">Vehicle</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escapeHtml(vehicle.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">VIN</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${vin?.trim() ? escapeHtml(vin.trim()) : "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">Fuel</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${fuel === "diesel" ? "Diesel" : "Gas"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Issue</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${escapeHtml(issue.trim())}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 13px; color: #888;">Sent from anywhereautorepair.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
