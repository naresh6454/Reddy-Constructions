import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL;

export async function POST(req: NextRequest) {
  if (!TO_EMAIL) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }
  try {
    const body = await req.json();
    const { name, email, phone, service, location, message, budget } = body;

    if (!name || !email || !phone || !service || !location || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Reddy Constructions <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `New Inquiry from ${name} — ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 24px; border-radius: 12px;">
          <div style="background: #0A3D91; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Inquiry Received</h1>
            <p style="color: #ffffff99; margin: 4px 0 0;">Reddy Constructions Website</p>
          </div>

          <div style="background: #ffffff; padding: 24px; border-radius: 8px; margin-bottom: 16px;">
            <h2 style="color: #1e293b; font-size: 16px; margin: 0 0 16px;">Client Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Name</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;"><a href="mailto:${email}" style="color: #0A3D91;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Phone</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;"><a href="tel:${phone}" style="color: #0A3D91;">${phone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Service</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${service}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Location</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${location}</td></tr>
              ${budget ? `<tr><td style="padding: 8px 0; color: #64748b;">Budget</td><td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${budget}</td></tr>` : ""}
            </table>
          </div>

          <div style="background: #ffffff; padding: 24px; border-radius: 8px;">
            <h2 style="color: #1e293b; font-size: 16px; margin: 0 0 12px;">Message</h2>
            <p style="color: #475569; line-height: 1.6; margin: 0;">${message}</p>
          </div>

          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 24px;">
            This inquiry was submitted via the Reddy Constructions website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
