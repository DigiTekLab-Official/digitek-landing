import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

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

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if ((body.website || "").trim()) return json({ success: true });

  if (!name || !email || !message) {
    return json({ error: "Please fill in your name, email, and message." }, 400);
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  // This checks if we successfully linked the binding in the dashboard
  if (!env.EMAIL) {
    console.error("Missing EMAIL binding");
    return json({ error: "Email is not configured on the server." }, 500);
  }

  const to = env.CONTACT_TO || "ameer.itoa@gmail.com";
  const from = env.CONTACT_FROM || "noreply@digiteklab.com";

  const text = `New project inquiry from ${name}\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nBudget: ${budget}\n\nMessage:\n${message}`;

  const esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );

  const html = `
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

  const msg = createMimeMessage();
  msg.setSender({ name: "Digitek Lab", addr: from });
  msg.setRecipient(to);
  msg.setSubject(`New project inquiry from ${name}`);
  msg.setHeader("Reply-To", email);
  msg.addMessage({ contentType: "text/plain", data: text });
  msg.addMessage({ contentType: "text/html", data: html });

  try {
    await env.EMAIL.send(new EmailMessage(from, to, msg.asRaw()));
    return json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err?.message);
    return json({ error: "We couldn't send your message. Please email us directly." }, 502);
  }
}