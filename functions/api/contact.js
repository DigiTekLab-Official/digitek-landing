import { EmailMessage } from "cloudflare:email";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" },
  });

export async function onRequestPost({ request, env }) {
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

  // Honeypot spam check
  if ((body.website || "").trim()) return json({ success: true });

  if (!name || !email || !message) {
    return json({ error: "Please fill in your name, email, and message." }, 400);
  }

  // Dashboard Binding Check
  if (!env.EMAIL) {
    console.error("CRITICAL: EMAIL binding is missing.");
    return json({ error: "Email is not configured on the server." }, 500);
  }

  const to = env.CONTACT_TO || "ameer.itoa@gmail.com";
  // It is safer to use info@ here since you explicitly verified it in routing
  const from = env.CONTACT_FROM || "info@digiteklab.com"; 

  // Native MIME formatting (Zero dependencies)
  const rawEmail = `From: "Digitek Lab Website" <${from}>\r\n` +
                   `To: <${to}>\r\n` +
                   `Reply-To: "${name.replace(/"/g, '')}" <${email}>\r\n` +
                   `Subject: New project inquiry from ${name.replace(/\r?\n/g, '')}\r\n` +
                   `Content-Type: text/plain; charset="utf-8"\r\n\r\n` +
                   `Name: ${name}\n` +
                   `Email: ${email}\n` +
                   `Company: ${company || "—"}\n` +
                   `Budget: ${budget || "—"}\n\n` +
                   `Message:\n${message}`;

  try {
    const msg = new EmailMessage(from, to, rawEmail);
    await env.EMAIL.send(msg);
    return json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err.message);
    return json({ error: "We couldn't send your message. Please email us directly." }, 502);
  }
}