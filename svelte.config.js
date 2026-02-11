import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config | import('svelte').Config} */
const config = {
  preprocess: [vitePreprocess()],
  compilerOptions: {
    // Enables compiling selected components as custom elements via `<svelte:options customElement=... />`.
    // Components without `customElement` options remain regular Svelte components.
    customElement: true
  }
};

export default config;

