import { defineConfig } from "vite";
import { vitePlugins } from "@mythosthesia/reveal-course-preset/vite-plugins.js";

export default defineConfig({
  base: "/holochain-lesson-3",
  plugins: vitePlugins,
});
