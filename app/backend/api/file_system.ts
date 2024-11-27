import {
  type Context,
  download,
  type NextFunc,
  req,
  res,
  Server,
  Token,
  upload,
} from "faster";

const filesRoute = async (server: Server) => {
  server.post(
    "/files/*", // For example: /files/general/myFile.xlsx
    Token.middleware,
    res("json"),
    upload(), // Using default options. No controls.
    async (ctx: any, next: any) => {
      ctx.res.body = ctx.extra.uploadedFiles;
      await next();
    },
  );

  server.get(
    "/files/*",
    Token.middleware,
    download(), // Using default options. No controls.
  );
  server.post(
    "/avatars/*",
    res("json"),
    upload({
      maxSizeBytes: async (ctx: Context) => 100000, //100kb
    }),
    async (ctx: any, next: any) => {
      ctx.res.body = ctx.extra.uploadedFiles;
      await next();
    },
  );

  server.get(
    "/avatars/*",
    download(), // Using default options. No controls.
  );
};
export default filesRoute;
