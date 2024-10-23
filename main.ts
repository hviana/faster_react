import Builder from "builder";
const options: any = (await import("./options.json", {
  with: { type: "json" },
})).default;
const denoJson: any = (await import("./deno.json", {
  with: { type: "json" },
})).default;

async function importFromRoot(path: string) {
  return await import(`./${path}`);
}
const builder = new Builder(options, denoJson, importFromRoot);
const server = builder.server;
export { options, server };
