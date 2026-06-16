/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  safelist: [
    'bg-node-blue', 'bg-node-red', 'bg-node-green', 'bg-node-purple',
    'text-node-blue', 'text-node-red', 'text-node-green', 'text-node-purple',
    'bg-tint-blue', 'bg-tint-red', 'bg-tint-green', 'bg-tint-purple',
  ],
  theme: {
    extend: {
      colors: {
        base: '#ffffff',
        surface: '#f7f8fa',
        panel: '#ffffff',
        line: '#e6e8ee',
        'line-soft': '#eef0f4',
        ink: '#0f1320',
        'ink-soft': '#3a4154',
        muted: '#4b5263',
        faint: '#6b7280',
        node: {
          blue: '#3a5bdc',
          red: '#c92a2a',
          green: '#157a33',
          purple: '#6d34c8',
        },
        tint: {
          blue: '#eef2ff',
          red: '#fdeeee',
          green: '#ecf8ef',
          purple: '#f3edfd',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,19,32,0.04), 0 4px 16px rgba(15,19,32,0.05)',
        'card-hover': '0 2px 4px rgba(15,19,32,0.06), 0 12px 32px rgba(15,19,32,0.09)',
        soft: '0 1px 2px rgba(15,19,32,0.04)',
      },
    },
  },
  plugins: [],
};
