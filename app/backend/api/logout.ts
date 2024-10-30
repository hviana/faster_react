import { type Context, type NextFunc, req, res, Server } from "faster";

const logoutApiRoute = async (server: Server) => {
  server.post(
    `/user/logout`,
    res("json"),
    req("json"),
    async (ctx: Context, next: NextFunc) => {
      console.log("call /user/logout api, content:");
      console.log(ctx.body); //When using the req body parser middleare, the result is in ctx.body
      ctx.res.body = { logout: true }; //passes the request json as return
      await next(); //Calling await next(); is important to continue the flow of execution (or not, if you want to interrupt).
    },
  );
};
export default logoutApiRoute;
