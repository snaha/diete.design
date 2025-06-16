import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// Dynamically collect all Svelte files in src/lib/components/ui (top-level only)
const uiDir = path.resolve(__dirname, 'src/lib/components/ui');
const entries = {};
for (const file of fs.readdirSync(uiDir)) {
  if (file.endsWith('.svelte')) {
    const name = file.replace(/\.svelte$/, '');
    entries[name] = path.join(uiDir, file);
  }
}

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: false, // disables single-entry lib mode
    rollupOptions: {
      input: entries,
      output: {
        dir: 'dist/components/ui',
        entryFileNames: '[name].js',
        format: 'es',
        exports: 'auto',
        preserveModules: false,
      },
    },
    emptyOutDir: false,
    outDir: 'dist/components/ui',
    minify: false,
  },
});
