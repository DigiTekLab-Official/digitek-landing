// Cloudflare Pages Function — handles POST /api/contact
// Refactored to use Cloudflare's native MailChannels integration
// Requires NO dashboard bindings, NO API keys, and NO extra dependencies.

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });

export async function onRequestPost({ request }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const budget = (body.budget || "").trim();
  const message = (body.message || "").trim();

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if ((body.website || "").trim()) return json({ success: true });

  if (!name || !email || !message) {
    return json({ error: "Please fill in your name, email, and message." }, 400);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  // HTML Escaping to prevent injection in the email body
  const esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  // Clean HTML layout for the email you will receive
  const htmlContent = `
    <h2 style="margin:0 0 12px;font:600 18px system-ui,sans-serif">New project inquiry</h2>
    <table cellpadding="0" cellspacing="0" style="font:14px/1.6 system-ui,sans-serif">
      <tr><td style="padding:2px 16px 2px 0"><strong>Name</strong></td><td>${esc(name)}</td></tr>
      <tr><td style="padding:2px 16px 2px 0"><strong>Email</strong></td><td>${esc(email)}</td></tr>
      <tr><td style="padding:2px 16px 2px 0"><strong>Company</strong></td><td>${esc(company) || "—"}</td></tr>
      <tr><td style="padding:2px 16px 2px 0"><strong>Budget</strong></td><td>${esc(budget) || "—"}</td></tr>
    </table>
    <p style="font:600 14px system-ui,sans-serif;margin:16px 0 4px">Message</p>
    <p style="font:14px/1.6 system-ui,sans-serif;white-space:pre-wrap;margin:0">${esc(message)}</p>
  `;

  try {
    // Send using MailChannels (Whitelisted for Cloudflare Pages automatically)
    const sendEmail = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'info@digiteklab.com', name: 'Digitek Lab' }],
          },
        ],
        from: {
          email: 'noreply@digiteklab.com',
          name: 'Digitek Lab Website',
        },
        reply_to: {
          email: email,
          name: name,
        },
        subject: `New project inquiry from ${name}`,
        content: [
          {
            type: 'text/html',
            value: htmlContent,
          },
        ],
      }),
    });

    if (sendEmail.ok) {
      return json({ success: true });
    } else {
      const errorText = await sendEmail.text();
      console.error("MailChannels Error:", errorText);
      return json(
        { error: "We couldn't send your message right now. Please email us directly." },
        502
      );
    }
  } catch (err) {
    console.error("Function Error:", err);
    return json({ error: "Internal Server Error" }, 500);
  }
}