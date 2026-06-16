// Single source of truth for the Digitek Lab site.
// Descriptions are deliberately concrete and honest — no inflated claims,
// no invented clients, no metrics that can't be substantiated.

export const projects = [
  {
    name: 'ApplySure',
    url: 'https://applysure.in',
    category: 'Web App',
    type: 'web',
    tagline: 'Application workspace with live online payments.',
    bullets: [
      'Razorpay payment integration (live transactions)',
      'Founding-access pass flow',
      'Document & form handling',
      'GA4 conversion tracking',
    ],
    tags: ['Astro', 'React', 'Razorpay'],
    featured: true,
  },
  {
    name: 'GovtJobsNet',
    url: 'https://govtjobsnet.com',
    category: 'Content Platform',
    type: 'platform',
    tagline: 'Government jobs & exam-information portal.',
    bullets: [
      'Large structured content system',
      'SEO-focused architecture',
      'Fast static delivery on Cloudflare',
      'Notifications, results, admit cards',
    ],
    tags: ['Astro', 'Sanity', 'Cloudflare'],
    featured: true,
  },
  {
    name: 'TopTenUAE',
    url: 'https://toptenuae.com',
    category: 'Content / Affiliate',
    type: 'platform',
    tagline: 'Consumer reviews & buying guides for the UAE market.',
    bullets: [
      'Comparison & buying-guide content',
      'SEO content architecture',
      'Static, fast-loading pages',
    ],
    tags: ['Astro', 'SEO'],
    featured: true,
  },
  {
    name: 'CalcToolsAI',
    url: 'https://calctoolsai.com',
    category: 'Tools Platform',
    type: 'web',
    tagline: 'Online calculators & utility tools.',
    bullets: [
      'Interactive calculator tools',
      'Programmatic landing pages',
      'React islands on a static shell',
    ],
    tags: ['Astro', 'React'],
    featured: true,
  },
  {
    name: 'FreeApplyTools',
    url: 'https://freeapplytools.com',
    category: 'Education Tools',
    type: 'web',
    tagline: 'Tools that help students with applications.',
    bullets: [
      'Student application utilities',
      'Conversion-optimized flows',
      'SEO content architecture',
    ],
    tags: ['Astro', 'React'],
    featured: true,
  },
  {
    name: 'ExamMetrics',
    url: 'https://exammetrics.com',
    category: 'Analytics Platform',
    type: 'platform',
    tagline: 'Exam intelligence & analytics for aspirants.',
    bullets: [
      'Rank, cutoff & college predictors',
      'FastAPI + Supabase backend',
      'Companion mobile build',
    ],
    tags: ['FastAPI', 'Supabase', 'Flutter'],
    featured: true,
  },
  {
    name: 'SyntaxSnap',
    url: 'https://syntaxsnap.com',
    category: 'Developer Tools',
    type: 'web',
    tagline: 'Performance-first developer utility platform.',
    bullets: [
      'Developer-focused tools',
      'Fast, lightweight UI',
      'Static-first architecture',
    ],
    tags: ['Astro', 'React'],
    featured: false,
  },
  {
    name: 'Spendlumen',
    url: 'https://spendlumen.com',
    category: 'Business Site',
    type: 'platform',
    tagline: 'Procurement intelligence consultancy brand & site.',
    bullets: [
      'Brand & marketing site',
      'Service-ladder presentation',
      'Lead capture',
    ],
    tags: ['Astro', 'Cloudflare'],
    featured: false,
  },
  {
    name: 'HelixVanguard',
    url: 'https://helixvanguard.com',
    category: 'Business Site',
    type: 'platform',
    tagline: 'Technology & consulting business website.',
    bullets: [
      'Brand positioning',
      'Enterprise presentation',
      'Lead generation',
    ],
    tags: ['Astro', 'SEO'],
    featured: false,
  },
  {
    name: 'WireTechNews',
    url: 'https://wiretechnews.com',
    category: 'News Platform',
    type: 'platform',
    tagline: 'Technology news & publishing site.',
    bullets: [
      'Publishing workflow',
      'News content architecture',
      'SEO optimization',
    ],
    tags: ['Astro', 'SEO'],
    featured: false,
  },
];

// The four pillars. AI is ONE of four — not the whole identity.
export const services = [
  {
    id: 'web',
    title: 'Web Development',
    color: 'blue',
    desc: 'Fast, SEO-ready websites and web apps built on a static-first stack.',
    points: [
      'Static-first sites & web apps (Astro, React, Next.js)',
      'SEO-ready architecture & strong Core Web Vitals',
      'Dashboards, portals & content platforms',
      'Cloudflare deployment and ongoing operation',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    color: 'red',
    desc: 'Android & iOS apps from a single codebase, ready for the stores.',
    points: [
      'Cross-platform apps with React Native',
      'Android & iOS from one shared codebase',
      'API integration and offline-ready flows',
      'Store submission and release support',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce & POS',
    color: 'green',
    desc: 'Online stores, live payments, and point-of-sale & billing systems.',
    points: [
      'Online stores and product catalogues',
      'Live payment integration (Razorpay in production)',
      'POS & billing systems — our roots since 2002',
      'Inventory, orders and customer journeys',
    ],
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    color: 'purple',
    desc: 'Practical AI agents and automations wired into real workflows.',
    points: [
      'Workflow and business-process automation',
      'AI-assisted internal tools and content systems',
      'Diagnostic and agent-style assistants',
      'Practical integrations into the systems you already run',
    ],
  },
];

// Real, substantiable numbers only.
export const stats = [
  { value: '20+', label: 'Years building technology', note: 'since 2002' },
  { value: '10+', label: 'Live products built & operated', note: 'in-house' },
  { value: 'Live', label: 'Online payments in production', note: 'Razorpay' },
  { value: 'India & UAE', label: 'Markets we serve', note: 'based in Tamil Nadu' },
];

export const process = [
  {
    step: '01',
    color: 'blue',
    title: 'Discover',
    desc: 'We study your goals, users, and existing workflows before writing a line of code.',
  },
  {
    step: '02',
    color: 'green',
    title: 'Design & plan',
    desc: 'We shape the scope, architecture, and interface around what actually moves the needle.',
  },
  {
    step: '03',
    color: 'purple',
    title: 'Build & integrate',
    desc: 'We build in modern, maintainable stacks and wire in payments, data, and AI where it helps.',
  },
  {
    step: '04',
    color: 'red',
    title: 'Launch & support',
    desc: 'We ship, measure, and keep improving — many of our products we operate ourselves.',
  },
];

export const techStack = [
  'Astro',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'FastAPI',
  'Supabase',
  'PostgreSQL',
  'Sanity',
  'Cloudflare',
  'Razorpay',
  'Tailwind',
];

export const industries = [
  {
    color: 'green',
    title: 'Retail & Grocery',
    desc: 'Storefronts, billing, and POS systems — drawing on a computer & POS background since 2002.',
  },
  {
    color: 'blue',
    title: 'Education',
    desc: 'Exam tools, application platforms, and student-facing products built for scale and SEO.',
  },
  {
    color: 'red',
    title: 'Publishing & Media',
    desc: 'Content platforms and news sites with fast static delivery and clean editorial workflows.',
  },
  {
    color: 'purple',
    title: 'Business & Consulting',
    desc: 'Brand sites, dashboards, and internal tools for service businesses and consultancies.',
  },
];

export const faqs = [
  {
    q: 'What kind of company is Digitek Lab?',
    a: 'A software studio that builds Web, Mobile, E-commerce/POS, and AI & Automation products. Our roots go back to 2002 as a computer & POS systems business (originally IC Tech); Digitek Lab is its modern continuation.',
  },
  {
    q: 'Is Digitek Lab an AI company?',
    a: 'AI and automation are one of our four pillars, not our whole identity. We use AI where it genuinely helps — workflow automation, AI-assisted tools, diagnostic and agent systems — alongside solid web, mobile, and commerce engineering.',
  },
  {
    q: 'Have you actually shipped products with live payments?',
    a: 'Yes. We build and operate 10+ live products in-house, and we run live online payments in production through Razorpay on ApplySure. We only describe capabilities we can demonstrate.',
  },
  {
    q: 'Which markets and industries do you work with?',
    a: 'We serve clients in India and the UAE and work across retail & grocery, education, publishing & media, and business & consulting. We are based in Tamil Nadu.',
  },
  {
    q: 'How do projects usually start?',
    a: 'With a short discovery conversation. We give you an honest take on scope, the fastest route to a working product, and where AI or automation realistically helps — then plan, build, and support from there.',
  },
];
