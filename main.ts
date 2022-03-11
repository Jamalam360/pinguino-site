/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "./server_deps.ts";
import manifest from "./fresh.gen.ts";

if (Deno.env.get("DENO_DEPLOYMENT_ID") == undefined) {
  await import("./util/build.ts");
}

console.warn(
  "Remember to implement Discord Oauth2 state before deploying to production! Very Important!",
);

await start(manifest);
