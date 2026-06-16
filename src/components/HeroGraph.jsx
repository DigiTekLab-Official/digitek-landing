import { useEffect, useRef, useState } from 'react';

// Nodes represent the studio's capability areas, connected like a build graph.
const nodes = [
  { id:'platforms', label:'Web', x:18, y:28, color:'#3a5bdc' },
  { id:'mobile', label:'Mobile', x:82, y:22, color:'#e03b3b' },
  { id:'automation', label:'Commerce', x:14, y:78, color:'#1f9d44' },
  { id:'ai', label:'AI', x:86, y:80, color:'#6d34c8' },
  { id:'core', label:'Digitek Lab', x:50, y:50, color:'#0f1320' },
];

const edges = [
 ['platforms','core'],
 ['mobile','core'],
 ['automation','core'],
 ['ai','core'],
];

export default function HeroGraph() {
  const [active, setActive] = useState(-1);
  const ref = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % edges.length);
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const find = (id) => nodes.find((n) => n.id === id);

  return (
    <div ref={ref} className="relative aspect-square w-full max-w-md mx-auto select-none" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        {/* static edges */}
        {edges.map(([a, b], i) => {
          const na = find(a);
          const nb = find(b);
          const isActive = i === active;
          return (
            <line
              key={i}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke={isActive ? na.color : '#e6e8ee'}
              strokeWidth={isActive ? 0.6 : 0.4}
              strokeLinecap="round"
              style={{ transition: 'stroke 0.6s ease, stroke-width 0.6s ease' }}
            />
          );
        })}

        {/* traveling pulse along the active edge */}
        {edges.map(([a, b], i) => {
          if (i !== active) return null;
          const na = find(a);
          const nb = find(b);
          return (
            <circle key={`pulse-${i}`} r="1.1" fill={na.color}>
              <animate
                attributeName="cx"
                values={`${na.x};${nb.x}`}
                dur="1.4s"
                repeatCount="1"
                fill="freeze"
              />
              <animate
                attributeName="cy"
                values={`${na.y};${nb.y}`}
                dur="1.4s"
                repeatCount="1"
                fill="freeze"
              />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.8;1" dur="1.4s" repeatCount="1" />
            </circle>
          );
        })}

        {/* nodes */}
        {nodes.map((n) => {
          const isCore = n.id === 'core';
          const r = isCore ? 6.5 : 4.5;
          return (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r={r} fill="#ffffff" stroke={n.color} strokeWidth={isCore ? 1.2 : 1} />
              <circle cx={n.x} cy={n.y} r={r * 0.4} fill={n.color} />
            </g>
          );
        })}
      </svg>

      {/* labels positioned over the SVG */}
      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
          style={{ left: `${n.x}%`, top: `${n.y}%`, transform: `translate(-50%, ${n.id === 'core' ? '140%' : '160%'})` }}
        >
          <span
            className={`rounded-full border px-2.5 py-1 text-[11px] font-600 shadow-soft ${
              n.id === 'core' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-soft border-line'
            }`}
          >
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
