import { type Context, type NextFunc, req, res, Server } from "faster";
import { pbkdf2 } from "../files/pbkdf2.ts";
const recoveryRoutes = async (server: Server) => {
  const oneSecond: number = 1000;
  const oneMin: number = oneSecond * 60;
  const oneHour: number = oneMin * 60;
  const oneDay: number = oneHour * 24;

  server.post(
    "/recovery",
    res("json"),
    async (ctx: any, next: any) => {
      const data = await ctx.req.json();
      const recoveryTime = oneHour;
      const existingUser = (await Server.kv.get(["users", data.email])).value;
      if (existingUser) {
        let alreadyRecoverSent = false;
        if (existingUser.recoveryTimeStamp) {
          if ((Date.now() - existingUser.recoveryTimeStamp) < recoveryTime) {
            alreadyRecoverSent = true;
          }
        }
        if (!alreadyRecoverSent) {
          const recCode = crypto.randomUUID();
          await Server.kv.set(["recovery_codes", recCode], data.email, {
            expireIn: recoveryTime,
          });
          existingUser.recoveryTimeStamp = Date.now();
          await Server.kv.set(["users", data.email], existingUser);
          //TODO send recCode to email
          console.log(`User ${data.email}, recovery code: ${recCode}`);
        }
      }
      ctx.res.body = {
        success: `Check your email to receive the password recovery code.`,
      };
      await next();
    },
  );
  server.get(
    "/recovery/:code",
    res("json"),
    async (ctx: any, next: any) => {
      const existingEmail =
        (await Server.kv.get(["recovery_codes", ctx.params.code])).value;
      if (!existingEmail) {
        ctx.res.body = { error: "The code does not exist or has expired." };
      } else {
        const user = (await Server.kv.get(["users", existingEmail])).value;
        const random6Digits = Math.floor(100000 + Math.random() * 900000)
          .toString(); //random 6 digits
        user.password = await pbkdf2(random6Digits);
        await Server.kv.set(["users", existingEmail], user);
        await Server.kv.delete(["recovery_codes", ctx.params.code]);
        ctx.res.body = {
          success:
            `Your temporary password is ${random6Digits}, change it to a secure password as soon as possible.`,
        };
      }
      await next();
    },
  );
};
export default recoveryRoutes;
