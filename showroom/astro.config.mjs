import { defineConfig } from 'astro/config';
import UnoCSS from '@unocss/astro';

export default defineConfig({
  root: './showroom',
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
});
