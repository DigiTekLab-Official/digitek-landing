import { useState } from 'react';

const dotColor = {
  web: '#3a5bdc',
  platform: '#1f9d44',
  tool: '#e03b3b',
};

const filters = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Apps' },
  { key: 'platform', label: 'Platforms' },
];

export default function PortfolioGrid({ projects }) {
  const [active, setActive] = useState('all');
  const shown = active === 'all' ? projects : projects.filter((p) => p.type === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => {
          const on = active === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-lg px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                on
                  ? 'bg-node-blue text-white'
                  : 'border border-line bg-white text-muted hover:text-ink'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener"
            className="group relative flex flex-col rounded-xl border border-line bg-white p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-node-blue/40 hover:shadow-card-hover"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: dotColor[p.type] || '#3a5bdc' }} />
                <span className="font-mono text-[11px] uppercase tracking-wider text-faint">{p.category}</span>
              </div>
              <span className="text-faint transition-all group-hover:translate-x-0.5 group-hover:text-node-blue">↗</span>
            </div>
            <h3 className="text-lg font-bold tracking-tight text-ink">{p.name}</h3>
            <p className="mt-1 text-sm text-muted">{p.tagline}</p>
            <ul className="mt-4 space-y-1.5">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-[13px] text-ink-soft">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-faint" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5 pt-1">
              {p.tags.map((t) => (
                <span key={t} className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-[11px] text-muted">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
