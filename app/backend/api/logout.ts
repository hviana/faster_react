/* You can import your backend libraries here.
You can organize your files into subdirectories here.
The .ts extension is used here.
The file and folder structure is free here and does not influence anything.
Here you are also free to define the routes in whatever pattern you want.
You need to have a default export with the function (which can be asynchronous).
This function has as input parameter an instance of Server of faster.
You can do your backend manipulations here. For example, getting data from the database. Including asynchronous calls.
Define your custom api routes. For help, see: https://github.com/hviana/faster */
import { type Context, type NextFunc, req, res, Server } from "faster";

const logoutApiRoute = async (server: Server) => {
  server.post(
    `/user/logout`,
    res("json"),
    req("json"),
    async (ctx: Context, next: NextFunc) => {
      console.log("call /user/logout api, content:");
      console.log(ctx.body); //request json
      ctx.res.body = { logout: true }; //passes the request json as return
      await next(); //Calling await next(); is important to continue the flow of execution (or not, if you want to interrupt).
    },
  );
};
export default logoutApiRoute;
