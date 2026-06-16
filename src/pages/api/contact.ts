import type { APIContext } from 'astro';

export const prerender = false; // Forces Astro to run this server-side

export async function POST({ request }: APIContext) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message, website } = body;

    // 1. Honeypot Spam Check
    // If a bot fills out the hidden 'website' field, we fake a success response to fool them.
    if (website) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    // 2. Field Validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // 3. Send Email via Cloudflare MailChannels (Free, Native, No API Keys)
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
          email: 'noreply@digiteklab.com', // Must be from your verified domain
          name: 'Contact Form',
        },
        reply_to: {
          email: email,
          name: name,
        },
        subject: `New Project Inquiry from ${name}`,
        content: [
          {
            type: 'text/html',
            value: `
              <h3>New Lead from Digitek Lab</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Company:</strong> ${company || 'N/A'}</p>
              <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
              <p><strong>Message:</strong><br/>${message}</p>
            `,
          },
        ],
      }),
    });

    if (sendEmail.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      const errorText = await sendEmail.text();
      console.error('MailChannels Error:', errorText);
      return new Response(JSON.stringify({ error: "Email server rejected the message. Please try again." }), { status: 500 });
    }

  } catch (error) {
    console.error("API Route Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}