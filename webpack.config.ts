import * as AppRootPath from "app-root-path";
import {
  createWebpackConfig,
  DEFAULT_BUILD_CONFIG,
  DEFAULT_METADATA_SCHEMA,
} from "userscripter/build";

import MANIFEST from "./manifest";
import METADATA from "./metadata";
import * as CONFIG from "./src/config";
import * as SITE from "./src/site";
import T from "./src/text";
import U from "./src/userscript";

export default createWebpackConfig({
  buildConfig: {
    ...DEFAULT_BUILD_CONFIG({
      rootDir: AppRootPath.path,
      id: U.id,
      now: new Date(),
    }),
    sassVariables: { CONFIG, SITE, T },
  },
  manifest: MANIFEST,
  metadata: METADATA,
  metadataSchema: DEFAULT_METADATA_SCHEMA,
  env: process.env,
});
