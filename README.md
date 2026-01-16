# Allison Murray Realtor Website

Professional real estate website for Allison Murray, serving Greater Boston and MetroWest Massachusetts.

## About

- **Agent**: Allison Murray
- **Brokerage**: Chinatti Realty Group
- **Phone**: (978) 888-7649
- **Service Areas**: Wellesley, Weston, Newton, Lexington, Needham, Natick, Waltham MA

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Pure CSS with custom design system
- **Output**: Static HTML (for Kinsta Static Hosting)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── public/
│   ├── favicon.svg
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Home
│   │   ├── sell.astro      # Sell Your Home (main conversion page)
│   │   ├── buy.astro       # Buy a Home
│   │   ├── about.astro     # About Allison
│   │   └── contact.astro   # Contact
│   └── styles/
│       └── global.css      # Design system
├── PROGRESS.md             # Development progress tracker
└── package.json
```

## Development Notes

See [PROGRESS.md](./PROGRESS.md) for detailed development progress and pending tasks.

## Deploy

Build the site and upload the `/dist` folder to Kinsta Static Hosting.

```bash
npm run build
```
