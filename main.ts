import Builder from "builder";
import type { JSONObject } from "@helpers/types.ts";
const options: JSONObject = (await import("./options.json", {
  with: { type: "json" },
})).default;
const denoJson: JSONObject = (await import("./deno.json", {
  with: { type: "json" },
})).default;

const importFromRoot = async (path: string) => {
  return await import(`./${path}`);
};
const builder = new Builder(options, denoJson, importFromRoot);
const server = builder.server;
export { options, server };
