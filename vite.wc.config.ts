import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      // Keep CSS in JS so custom elements inject styles into their shadow root.
      emitCss: false
    })
  ],
  build: {
    lib: {
      entry: 'src/wc/index.ts',
      name: 'VisBadgeElements',
      formats: ['es'],
      fileName: () => 'vis-badge.js'
    },
    outDir: 'dist-wc',
    emptyOutDir: true,
    rollupOptions: {
      // Bundle everything needed to define the element.
      external: []
    }
  }
});

