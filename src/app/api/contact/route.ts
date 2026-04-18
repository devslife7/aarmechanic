import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema, normalizePhone } from "@/lib/contact-schema";

const TO_EMAIL = process.env.CONTACT_EMAIL ?? "tyler@anywhereautorepair.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "Anywhere Auto Repair <onboarding@resend.dev>";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body?.website) {
      return NextResponse.json({ ok: true });
    }

    if (body?._t && Date.now() - body._t < 3000) {
      return NextResponse.json({ ok: true });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid submission",
          fieldErrors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, phone, vehicle, vin, fuel, issue } = parsed.data;
    const telHref = normalizePhone(phone);

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: `Anywhere Auto Repair <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `New Quote Request from ${name}`,
      replyTo: undefined,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; color: #1a1a1a;">
          <h2 style="margin: 0 0 24px; font-size: 20px; color: #111;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${escapeHtml(telHref)}" style="color: #3b82f6;">${escapeHtml(phone)}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">Vehicle</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escapeHtml(vehicle)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">VIN</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${vin ? escapeHtml(vin) : "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600; vertical-align: top;">Fuel</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${fuel === "diesel" ? "Diesel" : "Gas"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Issue</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${escapeHtml(issue)}</td>
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
