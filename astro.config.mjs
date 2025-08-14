// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://delightful-granita-42e804.netlify.app/",
  integrations: [preact()],
});