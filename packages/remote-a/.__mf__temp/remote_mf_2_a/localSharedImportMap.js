
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "shared-lib": async () => {
          let pkg = await import("/Volumes/code/module-federation/mf-vite-repro/packages/shared-lib/index.js");
            return pkg;
        }
      ,
        "svelte": async () => {
          let pkg = await import("__mf__virtual/__mfe_internal__remote_mf_2_a__prebuild__svelte__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "shared-lib": {
            name: "shared-lib",
            version: "1.0.0",
            scope: ["default"],
            loaded: false,
            from: "__mfe_internal__remote-a",
            async get () {
              if (false) {
                throw new Error(`[Module Federation] Shared module '${"shared-lib"}' must be provided by host`);
              }
              usedShared["shared-lib"].loaded = true
              const {"shared-lib": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = false && "shared-lib" === "react"
                ? (res?.default ?? res)
                : {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.0.0",
              
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      