import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { withRemoteFederation } from 'plugin-wrapper-remote';

export default defineConfig({
  base: '/remote-a/',
  server: {
    port: 5001,
    cors: true,
  },
  plugins: [
    svelte({ compilerOptions: { customElement: true } }),
    withRemoteFederation({
      name: 'remote-a',
      exposes: { './Button': './src/Button.svelte' },
      publicPath: '/remote-a/',
      shared: {
        'shared-lib': { singleton: true },
      },
    }),
  ],
});
