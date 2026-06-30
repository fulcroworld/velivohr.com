# VelivoHR Website — Project Notes

Context for continuing this project in Claude Code / VS Code. This file lives at the
root of the `site/` project (the Vite project root) — open this folder in VS Code.

## What this is

A multi-page marketing website for VelivoHR, a recruitment firm positioned as a
hiring specialist for the **entire marcom industry** (advertising, media, marketing,
communications) — not agencies only. Built as a static Vite project with one
serverless function for the contact form.

## Stack

- Vite 6 (multi-page static build, no frontend framework/JS framework — vanilla HTML/CSS/JS)
- Plain CSS (`public/assets/styles.css`) + plain JS (`public/assets/main.js`), shared across all pages
- Vercel for hosting: static pages + one serverless function (`api/contact.js`)
- `nodemailer` for sending contact-form emails via Azure Communication Services SMTP

## Project structure

```
site/
  index.html              Home
  about/index.html        About / team (Gokul Krishnamurthy, Debolina Das)
  services/index.html     Capabilities (Sourcing, Verification, Coordination, Offer Mgmt)
  process/index.html      How we work (5-step methodology)
  pricing/index.html      3 pricing tiers (5% / 5% / 8.33% of Gross Annual CTC)
  guarantee/index.html    90-day guarantee + terms accordion
  contact/index.html      Contact info + working contact form
  api/contact.js          Vercel serverless function — sends form submissions via SMTP
  public/
    assets/                styles.css, main.js, logos, team photos (served at /assets/...)
    sitemap.xml, robots.txt
  vite.config.js          Multi-page build config (7 HTML entry points)
  package.json             scripts: dev / build / preview; deps: nodemailer; devDep: vite
  vercel.json              "framework": "vite", cleanUrls + trailingSlash true
  .env                     REAL SMTP secrets (git-ignored, never share/zip this)
  .env.example             placeholder version, safe to share
  .gitignore               .env, .vercel, node_modules, dist
```

Every page shares the same `<header>`/mobile-nav/footer markup and links to
`/assets/styles.css` + `/assets/main.js` via root-absolute paths (these resolve
because `public/` is copied to the build root by Vite).

## Content rules already applied (don't reintroduce these)

- No literal "AI" anywhere in copy — language is about process + human judgment
  (recruiters reviewing, structured workflow), not automation/AI.
- No "agency-only" framing — copy addresses the whole marcom domain.
- Pricing/guarantee figures and legal terms are verbatim from the client's source
  deck/brief — don't alter numbers (5%, 8.33%, 90 days, 7 days, 60 days, etc.)
  without explicit instruction.

## Known issue — SMTP auth is currently failing

Live-tested the credentials in `.env` against `smtp.azurecomm.net:587` with
`nodemailer.verify()` and got:

```
Invalid login: 535 5.7.3 Authentication unsuccessful
```

The network connection works; Azure is rejecting the username/password. Before the
contact form will actually deliver mail, the user needs to, in their Azure
Communication Services resource:
1. Verify/regenerate the SMTP username + password (check for typos or rotation).
2. Confirm `donotreply@ibsfulcro.com` is a verified sender on that ACS resource.
3. Re-test (`node -e` script with `nodemailer.createTransport(...).verify()`, or just
   submit the live form once deployed) after fixing.

Until fixed, `/api/contact` will return a 500 with "Email is not configured on the
server yet." if env vars are missing, or fail at send time with a 502 if SMTP auth
still fails.

## Deployment

- No live Vercel URL exists yet — deployment requires the user's own Vercel
  account/auth (drag-and-drop at **vercel.com/drop**, or `vercel --prod` via CLI).
- After first deploy, set these env vars in the Vercel project's
  Settings → Environment Variables (do **not** commit `.env`):
  `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `CONTACT_TO`
  (values are in the local `.env` file). Redeploy after adding them.
- `sitemap.xml`, `robots.txt`, and all canonical/OG tags currently assume
  `https://www.velivohr.com/` — update if the real production domain differs.

## Running locally

```
npm install
npm run dev       # Vite dev server, live reload
# or
npm run build && npm run preview   # production build + local preview
```

Note: `/api/contact` is a Vercel serverless function — it won't run under plain
`vite dev`/`preview`. Use `vercel dev` (with Vercel CLI + auth) to test the contact
form locally, or just test it after deploying.

## Recent fixes (most recent session)

- **Guarantee page header contrast bug**: the page's hero was nested inside the dark
  `.dark-zone` section, sitting right behind the transparent fixed header, making the
  dark-colored logo/nav text invisible. Fixed by moving the hero to use the same
  light `.page-hero` band as every other subpage; the dark section now starts at the
  stats/accordion below it.
- **Guarantee copy rewrite**: headline, subhead, and all 4 accordion sections
  rewritten in more formal/professional language. All numbers and legal terms
  preserved exactly.
- **Mobile header decluttering**: hid the "Start a Conversation" button in the fixed
  header on screens ≤980px (CSS only, `.nav .nav-cta{display:none}` in the mobile
  media query) — it remains available in the full-screen mobile nav overlay.

## Open follow-ups / things to watch

- SMTP auth failure above — needs the user to fix on the Azure side.
- No live deployment yet.
- Domain placeholder (`velivohr.com`) needs confirming once a real domain is chosen.
- General UI/UX pass requested by the user is in progress — they flagged "inner
  pages has very bad UI and issues" broadly, of which the guarantee header contrast
  was one concrete instance fixed. Worth doing a fuller visual pass across
  about/services/process/pricing/contact pages (especially mobile breakpoints) since
  the user's feedback implies more issues may exist beyond what's been fixed so far.
