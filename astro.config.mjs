import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://roedwin-afk.github.io',
  base: '/panaderia-josue-landing', // el nombre exacto de tu repo en GitHub
  vite: {
    plugins: [tailwindcss()],
  },
});