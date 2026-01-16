import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://allisonmurray.com',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
