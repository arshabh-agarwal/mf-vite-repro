import { federation } from '@module-federation/vite';

/**
 * Host wrapper around @module-federation/vite's federation() plugin.
 * Mirrors the pattern used by @addepar/vite-plugin-host-app-shell.
 */
export function withHostFederation({ name, remotes, shared = {} }) {
  const normalizedRemotes = Object.fromEntries(
    Object.entries(remotes).map(([key, entry]) => [
      key,
      typeof entry === 'string' ? { type: 'module', name: key, entry } : entry,
    ])
  );
  return federation({
    name,
    remotes: normalizedRemotes,
    shared,
    dts: false,
    experiments: {
      asyncStartup: true,
    },
  });
}
