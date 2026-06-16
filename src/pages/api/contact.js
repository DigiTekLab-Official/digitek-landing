// File: src/pages/api/contact.ts
export const prerender = false; // Required if using Astro hybrid/static rendering mode

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    // TODO: Replace this with your actual Email Provider API (e.g., Resend, SendGrid)
    // Example using Resend API to send TO info@digiteklab.com so Cloudflare catches it:
    
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer YOUR_RESEND_API_KEY` 
      },
      body: JSON.stringify({
        from: 'Contact Form <noreply@digiteklab.com>',
        to: ['info@digiteklab.com'], // Sent here so Cloudflare Email Routing forwards it
        reply_to: email,
        subject: `New Project Inquiry from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `
      })
    });

    if (res.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      throw new Error('Email provider failed to send');
    }

  } catch (error) {
    console.error("API Route Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}