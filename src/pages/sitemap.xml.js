const base = 'https://digiteklab.com';
const pages = ['', 'services', 'portfolio', 'about', 'contact'];

export function GET() {
  const urls = pages
    .map((p) => `  <url><loc>${p ? `${base}/${p}` : base}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}