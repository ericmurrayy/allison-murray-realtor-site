# Allison Murray Realtor Website

Professional real estate website for Allison Murray, serving Greater Boston and MetroWest Massachusetts.

## About

| | |
|---|---|
| **Agent** | Allison Murray |
| **Brokerage** | Chinatti Realty Group |
| **Phone** | (978) 888-7649 |
| **Service Areas** | Wellesley, Weston, Newton, Lexington, Needham, Natick, Waltham MA |

## Tech Stack

- **Framework:** [Astro](https://astro.build/) 4.x
- **Language:** TypeScript
- **Styling:** Pure CSS with custom design system
- **Output:** Static HTML
- **Deployment:** Kinsta Static Hosting

## Prerequisites

- Node.js 18.17.0 or higher
- npm or pnpm

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/allison-murray-realtor-site.git
cd allison-murray-realtor-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` with your actual values (see [Configuration](#configuration) below).

### 4. Start development server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview production build locally |
| `npm run check` | Run TypeScript/Astro type checking |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## Project Structure

```
├── public/
│   ├── favicon.svg           # Site favicon
│   ├── allison-headshot.jpg  # Professional headshot
│   ├── sitemap.xml           # Static sitemap (auto-generated on build)
│   └── robots.txt            # Crawler instructions
├── src/
│   ├── components/
│   │   ├── Header.astro      # Sticky header with mobile nav
│   │   └── Footer.astro      # 4-column footer
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout with SEO & analytics
│   ├── pages/
│   │   ├── index.astro       # Home page
│   │   ├── sell.astro        # Sell your home (main conversion page)
│   │   ├── buy.astro         # Buy a home
│   │   ├── about.astro       # About Allison
│   │   ├── contact.astro     # Contact form
│   │   ├── listings.astro    # External listings link
│   │   ├── reviews.astro     # Client testimonials
│   │   ├── privacy.astro     # Privacy policy
│   │   └── areas/
│   │       ├── index.astro   # Service areas hub
│   │       └── [town].astro  # Dynamic town pages
│   └── styles/
│       └── global.css        # Design system & global styles
├── .env.example              # Environment variable template
├── .editorconfig             # Editor settings
├── .prettierrc               # Code formatting rules
├── astro.config.mjs          # Astro configuration
├── tsconfig.json             # TypeScript configuration
├── PROGRESS.md               # Development progress tracker
└── package.json
```

## Configuration

Before launching the site, you need to configure the following:

### Required

1. **Formspree** - Form submission handling
   - Create a form at [formspree.io](https://formspree.io)
   - Add your form ID to `.env` as `PUBLIC_FORMSPREE_ID`
   - Update form actions in `src/pages/contact.astro` and `src/pages/sell.astro`

2. **Google Analytics 4** - Site analytics
   - Create a GA4 property in [Google Analytics](https://analytics.google.com)
   - Add your Measurement ID to `.env` as `PUBLIC_GA4_ID`
   - Update the ID in `src/layouts/BaseLayout.astro`

3. **Professional Headshot**
   - Add image as `public/allison-headshot.jpg`
   - Recommended: 800x1000px, portrait orientation

### Optional

- Update social media links in `src/components/Footer.astro`
- Customize colors in `src/styles/global.css`
- Modify town data in `src/pages/areas/[town].astro`

## Deployment

### Build for production

```bash
npm run build
```

This outputs static files to the `dist/` folder.

### Deploy to Kinsta Static Hosting

1. Build the site: `npm run build`
2. Upload contents of `/dist` to Kinsta
3. Configure custom domain
4. Enable HTTPS

### Other hosting options

The static output works with any static hosting provider:
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront

## Site Pages

| Path | Description |
|------|-------------|
| `/` | Home page with hero and conversion CTAs |
| `/sell` | Main conversion page for sellers |
| `/buy` | Resources for home buyers |
| `/listings` | Links to Chinatti Realty listings |
| `/areas` | Service areas overview |
| `/areas/[town]` | Town-specific pages (7 towns) |
| `/reviews` | Client testimonials |
| `/about` | About Allison Murray |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |

## Development Notes

- See [PROGRESS.md](./PROGRESS.md) for detailed development history
- Main conversion hub is `/sell` - all CTAs should drive there
- Design uses navy (#1e3a5f) + gold (#c9a227) color scheme
- Mobile-first responsive design with breakpoints at 600px and 900px
- Includes scroll animations with reduced-motion support

## Troubleshooting

### Build fails with type errors

Run `npm run check` to see specific TypeScript errors.

### Forms not submitting

1. Verify Formspree ID is correct in form action URLs
2. Check browser console for errors
3. Test form in Formspree dashboard

### Images not loading

Ensure images are in the `public/` folder and referenced with absolute paths (e.g., `/allison-headshot.jpg`).

### Analytics not tracking

1. Verify GA4 ID format starts with `G-`
2. Check that tracking code is in `BaseLayout.astro`
3. Use Google Tag Assistant to debug

## License

Private - All rights reserved.
