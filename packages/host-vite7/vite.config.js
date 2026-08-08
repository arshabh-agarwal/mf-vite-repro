import { defineConfig } from 'vite';
import { withHostFederation } from 'plugin-wrapper-host';

export default defineConfig({
  base: '/host-vite7/',
  server: {
    port: 5004,
    cors: true,
  },
  plugins: [
    withHostFederation({
      name: 'host-vite7',
      remotes: {
        'remote-a': '/remote-a/mf-manifest.json',
        'remote-b': '/remote-b/mf-manifest.json',
        'remote-c': '/remote-c/mf-manifest.json',
      },
      shared: {
        'shared-lib': { singleton: true, eager: true },
      },
    }),
  ],
});
