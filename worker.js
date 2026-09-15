export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // API Route: Send email via Resend
    if (url.pathname === '/api/send-email') {
      if (request.method === 'OPTIONS') {
        return new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
        });
      }

      if (request.method !== 'POST') {
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
          status: 405,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      try {
        const body = await request.json();
        const { name, email, services, timeline, message } = body || {};

        if (!name || !email || !message) {
          return new Response(JSON.stringify({ error: 'Please provide name, email, and message.' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const RESEND_API_KEY = env.RESEND_API_KEY;
        const RECIPIENT_EMAIL = env.RECIPIENT_EMAIL || 'ummar1852@gmail.com';
        const FROM_EMAIL = env.FROM_EMAIL || 'onboarding@resend.dev';

        if (!RESEND_API_KEY) {
          return new Response(JSON.stringify({ error: 'RESEND_API_KEY is not configured in Cloudflare environment variables.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const htmlContent = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0c0e14; color: #f8fafc; border-radius: 12px; padding: 28px; border: 1px solid rgba(255,255,255,0.1);">
            <h2 style="color: #818cf8; margin-top: 0; font-size: 22px; font-weight: 700;">🚀 New Project Inquiry Received</h2>
            <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.12); margin: 20px 0;" />
            <p><strong style="color: #94a3b8;">Client:</strong> <span style="color: #ffffff; font-size: 16px; font-weight: 700;">${name}</span> &lt;${email}&gt;</p>
            <p><strong style="color: #94a3b8;">Services Needed:</strong> <span style="background: rgba(99,102,241,0.2); border: 1px solid rgba(99,102,241,0.4); color: #c7d2fe; padding: 4px 10px; border-radius: 6px; font-size: 13px; font-weight: 600;">${services || 'Custom Web Application'}</span></p>
            <p><strong style="color: #94a3b8;">Desired Timeline:</strong> <span style="background: rgba(16,185,129,0.2); border: 1px solid rgba(16,185,129,0.4); color: #34d399; padding: 4px 10px; border-radius: 6px; font-size: 13px; font-weight: 600;">${timeline || 'Flexible'}</span></p>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 18px; margin-top: 16px;">
              <span style="color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: 600; display: block; margin-bottom: 8px;">Project Overview & Goals</span>
              <p style="margin: 0; color: #e2e8f0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: #64748b;">
              Shaik Ummar Farooq • Portfolio Inquiry Hub
            </div>
          </div>
        `;

        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: `Portfolio Inquiry <${FROM_EMAIL}>`,
            to: [RECIPIENT_EMAIL],
            reply_to: email,
            subject: `🚀 New Project Inquiry from ${name} - ${services || 'General'}`,
            html: htmlContent
          })
        });

        const resendData = await resendRes.json();

        if (!resendRes.ok) {
          return new Response(JSON.stringify({ error: resendData.message || 'Failed to send email' }), {
            status: resendRes.status || 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        return new Response(JSON.stringify({ success: true, id: resendData.id }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: err.message || 'Internal server error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Static asset serving from ./dist
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not found', { status: 404 });
  }
};
