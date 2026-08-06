import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { withRemoteFederation } from 'plugin-wrapper-remote';

export default defineConfig({
  base: '/remote-c/',
  server: {
    port: 5003,
    cors: true,
  },
  plugins: [
    svelte({ compilerOptions: { customElement: true } }),
    withRemoteFederation({
      name: 'remote-c',
      exposes: { './Dashboard': './src/Dashboard.svelte' },
      publicPath: '/remote-c/',
      remotes: {
        'remote-a': '/remote-a/mf-manifest.json',
        'remote-b': '/remote-b/mf-manifest.json',
      },
    }),
  ],
});
