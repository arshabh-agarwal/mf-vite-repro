import { federation } from '@module-federation/vite';

/**
 * Remote wrapper around @module-federation/vite's federation() plugin.
 * Mirrors the pattern used by @addepar/vite-plugin-remote-mf.
 */
export function withRemoteFederation({ name, exposes, publicPath, remotes = {}, shared = {} }) {
  const normalizedRemotes = Object.fromEntries(
    Object.entries(remotes).map(([key, entry]) => [
      key,
      typeof entry === 'string' ? { type: 'module', name: key, entry } : entry,
    ])
  );
  return federation({
    name,
    filename: 'remoteEntry.js',
    manifest: true,
    exposes,
    remotes: normalizedRemotes,
    shared,
    dts: false,
    publicPath,
    experiments: {
      asyncStartup: true,
    },
  });
}
