# Digitek Lab — Studio Site

A 4-page marketing site for Digitek Lab (web / mobile / custom software studio).
Built with **Astro + React islands + Tailwind CSS**, output as a fully static
site for **Cloudflare Pages**.

Pages: Home `/`, Portfolio `/portfolio`, About `/about`, Contact `/contact`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to ./dist
npm run preview    # preview the built site
```

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Pages → Create project → connect the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Framework preset:** Astro (or "None")
4. Add your domain `digiteklab.com` under the project's Custom Domains.

The build is `output: 'static'` (no SSR adapter), so it deploys as plain files.

## ⚠️ Things to edit before going live

1. **Contact details** — `src/pages/contact.astro` (top of file):
   set the correct EMAIL, PHONE, WHATSAPP, and LOCATION. The old site had two
   different phone numbers and emails; pick the right ones once here.

2. **Contact form endpoint** — `src/components/ContactForm.jsx`:
   right now the form just shows a success message; it does not send anything.
   To make it deliver, create a Cloudflare Pages Function at
   `functions/api/contact.js` and uncomment the `fetch('/api/contact'...)` call.
   Simplest options: forward to your email, a Google Sheet, or a form service.

3. **Project descriptions** — `src/data/projects.js` is the single source of
   truth for every project shown on Home and Portfolio. Edit names, taglines,
   bullets, tags, and `featured: true/false` (controls what shows on the
   homepage) all in one place.

4. **Screenshots (optional)** — the cards are text-only right now. If you want
   thumbnails, drop images in `public/work/` and add an `<img>` to the cards.

## Notes

- The logo lives at `public/logo.png`.
- Brand name is **Digitek Lab** everywhere — keep it consistent (matches the
  footer credit "Designed & Maintained by Digitek Lab" you're adding to your
  other sites).
- The mobile nav shows all four links; on very narrow phones the last link sits
  near the edge. If it bothers you later, the clean fix is a hamburger menu —
  not needed for launch.
