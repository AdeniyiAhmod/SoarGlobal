# Soar Global

Marketing website for Soar Global Trade & Logistics Ltd, built with Next.js, TypeScript and Tailwind CSS for deployment on Vercel.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## Vercel Deployment

Recommended Vercel settings:

- Framework preset: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: leave as Vercel default
- Production branch for the current PR: `codex/soar-global-site`

The site builds without email environment variables, so it can be deployed for a team preview now. Contact and early quote forms use Resend through `app/api/enquiry/route.ts`; add these variables before expecting form submissions to send:

```bash
RESEND_API_KEY=
CONTACT_EMAIL=info@soarglobals.com
RESEND_FROM="Soar Global <hello@soarglobals.com>"
```

`RESEND_FROM` must use a sender domain verified in Resend. Until that is ready, direct phone, email and WhatsApp links still work on the live site.

## Image Specs

Hero carousel assets:
- `public/images/hero-port.png`
- `public/images/hero-air-freight.png`
- `public/images/hero-warehouse.png`

Recommended hero spec:
- Aspect ratio: `16:9` or wider landscape.
- Minimum source size: `1920x1080`; `2400x1350` preferred.
- Subject: container ports, air freight, warehouse operations, delivery fleets, freight preparation, or Belfast/Northern Ireland trade activity.
- Style: clean commercial photography, realistic, modern, uncluttered.
- Composition: strong subject with safe open space for code-rendered overlay text, especially on the left and center.
- Avoid: readable text, logos, watermarks, fake UI, mockup screenshots, or using the client's reference mockup as live site photography.

Supporting services image:
- `public/images/what-we-handle.png`
- Best as a simple logistics scene with vehicle, warehouse, cargo, or dispatch activity.

Home service card assets:
- `public/images/service-procurement.png`
- `public/images/service-freight.png`
- `public/images/service-automotive.png`

Recommended service card spec:
- Aspect ratio: landscape, works around `4:3` and `16:10` crops.
- Subject: one clear operational scene per service.
- Style: realistic, bright, commercial, uncluttered.
- Avoid: readable text, logos, number plates, watermarks, fake UI, or collage-style composites.
