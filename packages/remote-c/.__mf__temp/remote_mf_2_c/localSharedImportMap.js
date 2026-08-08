
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
    }
      const usedShared = {
      
    }
      const usedRemotes = [
                {
                  entryGlobalName: "remote-a",
                  name: "remote-a",
                  type: "module",
                  entry: "/remote-a/mf-manifest.json",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "remote-b",
                  name: "remote-b",
                  type: "module",
                  entry: "/remote-b/mf-manifest.json",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      