# PF & Co Construction — Website

AI-powered structural engineering and construction services website for PF & Co, serving Surrey and London.

## Tech Stack

- **React 19** + TypeScript
- **Vite** — build tooling
- **Tailwind CSS v4** — styling
- **Framer Motion** — animations
- **React Router v7** — routing
- **React Helmet Async** — SEO meta tags
- **Stripe** — payments integration
- **Lucide React** — icons

## Getting Started

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `GEMINI_API_KEY` — Google Gemini API key
- `APP_URL` — Deployed application URL

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  App.tsx          — Root layout (Navbar, Footer, Routes)
  pages/           — All route pages
  components/      — Reusable components
public/
  manifest.json    — PWA manifest
  robots.txt       — Search engine directives
  sitemap.xml      — Sitemap for SEO
```
