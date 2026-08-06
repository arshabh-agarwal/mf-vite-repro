import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { withRemoteFederation } from 'plugin-wrapper-remote';

export default defineConfig({
  base: '/remote-b/',
  server: {
    port: 5002,
    cors: true,
  },
  optimizeDeps: {
    exclude: ['fsevents'],
  },
  plugins: [
    svelte({ compilerOptions: { customElement: true } }),
    withRemoteFederation({
      name: 'remote-b',
      exposes: { './Card': './src/Card.svelte' },
      publicPath: '/remote-b/',
    }),
  ],
});
