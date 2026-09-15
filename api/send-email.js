const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "ummar1852@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try { body = JSON.parse(body); } catch (e) {}
    }
    const { name, email, services, timeline, message } = body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields: name, email, and message are required." });
    }

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0c0e14; color: #f8fafc; border-radius: 12px; padding: 28px; border: 1px solid rgba(255,255,255,0.1);">
        <h2 style="color: #818cf8; margin-top: 0; font-size: 22px; font-weight: 700;">🚀 New Project Inquiry Received</h2>
        <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.12); margin: 20px 0;" />
        <p><strong style="color: #94a3b8;">Client:</strong> <span style="color: #ffffff; font-size: 16px; font-weight: 700;">${name}</span> &lt;${email}&gt;</p>
        <p><strong style="color: #94a3b8;">Services Needed:</strong> <span style="background: rgba(99,102,241,0.2); border: 1px solid rgba(99,102,241,0.4); color: #c7d2fe; padding: 4px 10px; border-radius: 6px; font-size: 13px; font-weight: 600;">${services || "Custom Web Application"}</span></p>
        <p><strong style="color: #94a3b8;">Desired Timeline:</strong> <span style="background: rgba(16,185,129,0.2); border: 1px solid rgba(16,185,129,0.4); color: #34d399; padding: 4px 10px; border-radius: 6px; font-size: 13px; font-weight: 600;">${timeline || "Flexible"}</span></p>
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 18px; margin-top: 16px;">
          <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 8px;">Project Overview & Goals</span>
          <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #64748b;">
          Shaik Ummar Farooq • Portfolio Inquiry Hub
        </div>
      </div>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: `Portfolio Inquiry <${FROM_EMAIL}>`,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject: `🚀 New Project Inquiry from ${name} - ${services || "General"}`,
        html: htmlContent
      })
    });

    const resendData = await resendRes.json();
    if (!resendRes.ok) {
      return res.status(resendRes.status || 500).json({ error: resendData.message || "Failed to send email via Resend" });
    }
    return res.status(200).json({ success: true, id: resendData.id });
  } catch (err) {
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}
