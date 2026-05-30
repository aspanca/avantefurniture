# Avante Furniture

A fast, SEO-friendly marketing site for **Avante** — a modern furniture company focused on kitchens, offices, and bedrooms.

Built with [Astro](https://astro.build) (static HTML for SEO) + React islands (Framer Motion animations). Content is managed via **Decap CMS** (Netlify CMS) at `/admin`.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Netlify

This repo is linked to the **avante-website** Netlify project:

| | |
|---|---|
| **Site ID** | `18223a9f-6f76-4774-8d82-0c71d77e837c` |
| **Production URL** | https://avantefurniture.com |
| **Netlify subdomain** | https://avante-website.netlify.app |
| **Dashboard** | https://app.netlify.com/projects/avante-website |

Build settings (in `netlify.toml`): `npm run build` → publish `dist`.

Link locally: `npx netlify-cli link --id 18223a9f-6f76-4774-8d82-0c71d77e837c`

Deploy: `npx netlify-cli deploy --prod` (after `npm run build`).

### Netlify CMS (content admin)

1. **Site settings → Identity** → Enable Identity.
2. **Identity → Services** → Enable **Git Gateway**.
3. Visit **https://avantefurniture.com/admin** and invite editors via Identity.

**Collections:**

| Collection | Folder | Use |
|------------|--------|-----|
| Journal Posts | `src/content/posts/` | Blog / news |
| Projects | `src/content/projects/` | Portfolio by space |

Uploaded images go to `public/images/uploads/`.

**Local CMS (optional):**

```bash
npx decap-server
```

Run alongside `npm run dev` with `local_backend: true` in `public/admin/config.yml`.

### Contact form

The contact page uses Netlify Forms. After deploy, enable form notifications under **Site settings → Forms**.

## Project structure

```
src/
  content/          # Markdown (posts & projects) — edited via CMS
  components/       # UI pieces + React animation
  layouts/          # Page shell, SEO, fonts
  pages/            # Routes (home, spaces, blog, contact)
public/
  admin/            # Decap CMS UI
  images/           # Static assets + CMS uploads
```

## Customize

- **Brand copy:** `src/lib/site.ts`
- **Colors & fonts:** `src/styles/global.css`
- **Hero images:** Replace SVGs in `public/images/` or upload via CMS

## Tech

- Astro 4, React 18, Framer Motion
- `@astrojs/sitemap` for SEO
- Decap CMS + Netlify Identity + Git Gateway
