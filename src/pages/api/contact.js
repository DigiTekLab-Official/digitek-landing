// File: src/pages/api/contact.js
export const prerender = false; // Required for Astro SSR

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // Sending via MailChannels natively on Cloudflare Pages (Free, no API key)
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
          email: 'noreply@digiteklab.com', // Must be from your domain
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
      return new Response(JSON.stringify({ error: "Email server rejected the message." }), { status: 500 });
    }

  } catch (error) {
    console.error("API Route Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}