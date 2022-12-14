import { BuildConfig, metadataUrl } from "userscripter/build";
import { Metadata } from "userscript-metadata";

import U from "./src/userscript";
import { Actions } from "./src/controller/actions";

export default function (buildConfig: BuildConfig): Metadata {
  const hostedAt = buildConfig.hostedAt;
  return {
    name: U.name,
    version: U.version,
    description: U.description,
    author: U.author,
    match: Actions.hostnameToHostnameList(U.hostname),
    namespace: U.namespace,
    run_at: U.runAt,
    ...(hostedAt === null
      ? {}
      : {
          downloadURL: metadataUrl(hostedAt, U.id, "user"),
          updateURL: metadataUrl(hostedAt, U.id, "meta"),
        }),
  };
}
