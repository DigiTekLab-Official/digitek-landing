import { useState, useRef, useEffect } from 'react';

// ⚠️ Replace with your Cloudflare Turnstile site key (Dashboard → Turnstile → your site → Site Key)
const TURNSTILE_SITE_KEY = "0x4AAAAAADl11Vic-ulVvBua";

const budgets = [
  'Under ₹1,00,000',
  '₹1,00,000 – ₹3,00,000',
  '₹3,00,000 – ₹7,00,000',
  '₹7,00,000+',
  'Not sure yet',
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '', website: '' });
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  useEffect(() => {
    let attempts = 0;
    const tryRender = () => {
      if (window.turnstile && turnstileRef.current && widgetIdRef.current === null) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: (token) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
          'error-callback': () => setTurnstileToken(''),
        });
      } else if (attempts++ < 40) {
        setTimeout(tryRender, 100);
      }
    };
    tryRender();
    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || sending) return;
    if (form.website) { setSent(true); return; }
    if (!turnstileToken) {
      setError('Please complete the verification.');
      return;
    }
    setSending(true);
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '4eb356fa-9002-4fc8-8c57-b5354b06379c',
          subject: `New project inquiry from ${form.name}`,
          from_name: 'Digitek Lab website',
          name: form.name,
          email: form.email,
          company: form.company,
          budget: form.budget,
          message: form.message,
          botcheck: form.website,
          'cf-turnstile-response': turnstileToken,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (data.success === true) {
        setSent(true);
      } else {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Network error. Please try again or email us directly.');
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
      setTurnstileToken('');
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    'w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-node-blue focus:outline-none focus:ring-2 focus:ring-node-blue/15';

  const labelClass =
    'mb-1.5 block font-mono text-xs uppercase tracking-wider text-muted';

  if (sent) {
    return (
      <div className="rounded-2xl border border-node-green/30 bg-tint-green p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-node-green/15 text-2xl text-node-green">✓</div>
        <h3 className="text-lg font-bold text-ink">Message sent.</h3>
        <p className="mt-2 text-sm text-muted">
          Thanks, {form.name.split(' ')[0] || 'there'}. We've received your message and
          will get back to you shortly. For anything urgent, reach us directly on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-line bg-panel p-6 shadow-card sm:p-8">
      <div className="grid gap-4">
        {/* Honeypot — hidden from users and assistive tech, catches bots */}
        <div hidden>
          <label htmlFor="contact-website">Leave this field empty</label>
          <input
            id="contact-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={update('website')}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>Name</label>
            <input id="contact-name" name="name" autoComplete="name" required className={inputClass} value={form.name} onChange={update('name')} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required className={inputClass} value={form.email} onChange={update('email')} placeholder="you@company.com" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-company" className={labelClass}>Company</label>
            <input id="contact-company" name="company" autoComplete="organization" className={inputClass} value={form.company} onChange={update('company')} placeholder="Optional" />
          </div>
          <div>
            <label htmlFor="contact-budget" className={labelClass}>Budget</label>
            <select id="contact-budget" name="budget" className={inputClass} value={form.budget} onChange={update('budget')}>
              <option value="">Select a range</option>
              {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="contact-message" className={labelClass}>Project description</label>
          <textarea id="contact-message" name="message" required className={`${inputClass} min-h-[120px] resize-y`} value={form.message} onChange={update('message')} placeholder="What are you trying to build?" />
        </div>
        {/* Turnstile widget — rendered explicitly via useEffect to avoid React island timing issues */}
        <div ref={turnstileRef} />
        {error && (
          <p role="alert" className="rounded-lg border border-node-red/30 bg-tint-red px-4 py-3 text-sm text-node-red">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={sending}
          className="mt-1 rounded-lg bg-node-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-node-blue/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
}
