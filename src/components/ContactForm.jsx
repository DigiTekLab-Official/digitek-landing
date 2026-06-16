import { useState } from 'react';

const budgets = [
  'Under ₹1,00,000',
  '₹1,00,000 – ₹3,00,000',
  '₹3,00,000 – ₹7,00,000',
  '₹7,00,000+',
  'Not sure yet',
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    // TODO: wire to your real endpoint (see README).
    // await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) });
    try {
      setSent(true);
    } catch (err) {
      console.error(err);
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
        <h3 className="text-lg font-bold text-ink">Message ready to send.</h3>
        <p className="mt-2 text-sm text-muted">
          Thanks, {form.name.split(' ')[0] || 'there'}. We'll get back to you shortly.
          For anything urgent, reach us directly on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-panel p-6 shadow-card sm:p-8">
      <div className="grid gap-4">
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
        <button onClick={handleSubmit} className="mt-1 rounded-lg bg-node-blue px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-node-blue/90">
          Send message
        </button>
      </div>
    </div>
  );
}
