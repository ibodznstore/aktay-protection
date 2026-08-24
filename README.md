# Aktay Protection

Production-ready Next.js App Router recreation of the Aktay Protection website.
The project uses JavaScript/JSX, local media assets, and the vinext runtime.

## Prerequisites

- Node.js `>=22.13.0`

## Quick start

```bash
npm install
npm run dev
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin before publishing. The
application form validates CV uploads locally and transmits completed applications
to its configured Basin endpoint.

## Commands

- `npm run dev`: start local development
- `npm run build`: create the production vinext bundle
- `npm run lint`: run static checks
- `npm test`: build and verify the rendered home page
