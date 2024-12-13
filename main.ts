import Builder from "builder";
import type { JSONObject } from "@helpers/types.ts";
import options from "./options.json" with { type: "json" };
import denoJson from "./deno.json" with { type: "json" };

const importFromRoot = async (path: string, alias?: any) => {
  if (!alias) {
    return await import(`./${path}`);
  } else {
    return await import(`./${path}`, alias);
  }
};
const builder = new Builder(options, denoJson, importFromRoot);
const server = builder.server;
export { options, server };

export default { fetch: server.fetch };
