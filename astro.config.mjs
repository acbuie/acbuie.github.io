// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://acbuie.github.io",

  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/posts": "/blog",
  },

  // TODO: Swap to Shiki or Prism eventually
  markdown: {
    syntaxHighlight: false,
  },
});
