import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      {
        name: 'resend-api-server',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

            if (req.method === 'OPTIONS') {
              res.statusCode = 200;
              res.end();
              return;
            }

            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                const payload = JSON.parse(body || '{}');
                const { name, email, services, timeline, message } = payload;

                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ error: 'Please provide name, email, and message.' }));
                  return;
                }

                const RESEND_API_KEY = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
                const RECIPIENT_EMAIL = env.RECIPIENT_EMAIL || process.env.RECIPIENT_EMAIL || 'ummar1852@gmail.com';
                const FROM_EMAIL = env.FROM_EMAIL || process.env.FROM_EMAIL || 'onboarding@resend.dev';

                if (!RESEND_API_KEY) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'RESEND_API_KEY is not configured in .env' }));
                  return;
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
                  res.statusCode = resendRes.status || 500;
                  res.end(JSON.stringify({ error: resendData.message || 'Failed to send email via Resend' }));
                  return;
                }

                res.statusCode = 200;
                res.end(JSON.stringify({ success: true, id: resendData.id }));
              } catch (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: err.message || 'Internal server error' }));
              }
            });
          });
        }
      }
    ]
  };
});
