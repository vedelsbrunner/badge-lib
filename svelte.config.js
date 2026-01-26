import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config | import('svelte').Config} */
const config = {
  preprocess: [vitePreprocess()]
};

export default config;

