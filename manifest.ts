import { BuildConfig, distFileName } from "userscripter/build";
import Manifest from "webextension-manifest";

import U from "./src/userscript";

export default function (_: BuildConfig): Manifest {
  return {
    manifest_version: 2,
    name: U.name,
    version: U.version,
    description: U.description,
    author: U.author,
    content_scripts: [
      {
        matches: [`*://${U.hostname}/*`, `*://www.${U.hostname}/*`],
        js: [distFileName(U.id, "user")],
        run_at: "document_start",
      },
    ],
  };
}
