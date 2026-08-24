# Aktay Protection

Production-ready Next.js App Router recreation of the Aktay Protection website.
The project uses JavaScript/JSX, local media assets, and standard Next.js.

## Prerequisites

- Node.js `>=22.13.0`

## Quick start

```bash
pnpm install
pnpm dev
pnpm build
```

Set `NEXT_PUBLIC_SITE_URL` to the production origin before publishing. The
application form validates CV uploads locally and transmits completed applications
to its configured Basin endpoint.

## Commands

- `pnpm dev`: start local development
- `pnpm build`: create the production Next.js bundle
- `pnpm lint`: run static checks
- `pnpm test`: build and verify the site source

## Deployment

Import the GitHub repository into Vercel with the Next.js framework preset.
Set `NEXT_PUBLIC_SITE_URL` to the final `https://` domain in the Vercel project
settings before the production deployment.
