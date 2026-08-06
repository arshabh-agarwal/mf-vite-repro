import { defineConfig } from 'vite';
import { withHostFederation } from 'plugin-wrapper-host';

export default defineConfig({
  base: '/host-vite8/',
  server: {
    port: 5005,
    cors: true,
  },
  plugins: [
    withHostFederation({
      name: 'host-vite8',
      remotes: {
        'remote-a': '/remote-a/mf-manifest.json',
        'remote-b': '/remote-b/mf-manifest.json',
        'remote-c': '/remote-c/mf-manifest.json',
      },
    }),
  ],
});
