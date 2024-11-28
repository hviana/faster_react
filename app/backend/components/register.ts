import { type BackendComponent } from "@helpers/backend/types.ts";
import { checkPasswordStrength, validateEmail } from "../files/validations.ts";
import { Context, NextFunc, Server, Token } from "faster";
import { pbkdf2 } from "../files/pbkdf2.ts";
const signupBackendComponent: BackendComponent = {
  before: [
    async (ctx: Context, next: NextFunc) => {
      ctx.req = new Request(ctx.req, {
        headers: {
          ...Object.fromEntries(ctx.req.headers as any),
          "Authorization": `Bearer token ${ctx.url.searchParams.get("token")}`,
        },
      });
      await next();
    },
  ],
  after: async (props) => {
    let { name, email, password, avatarUrl, token, update } = props;
    if (update) {
      try {
        await Token.getPayload(token as string);
      } catch (e: any) {
        props.error = "Unauthenticated user to update profile";
      }
    }

    props.uploadedAvatar = avatarUrl || "";
    if (name && email) {
      const exists = (await Server.kv.get(["users", email])).value;
      if (update) {
        if (!password) {
          password = exists.password;
        } else {
          password = await pbkdf2(password as string);
        }
      } else {
        if (exists) {
          props.error = "User already exists";
        }
        if (checkPasswordStrength(password as string) < 1) {
          props.error = "Error: very weak password";
        }
        password = await pbkdf2(password as string);
      }
      if (!validateEmail(email as string)) {
        props.error = "Invalid email";
      }
      if (!name) {
        props.error = "Fill in the name";
      }
      if (!props.error) {
        try {
          await Server.kv.set(["users", email], {
            name: name,
            email: email,
            password: password,
            avatarUrl: avatarUrl,
          });
        } catch (e: any) {
          props.error = e.message;
        }

        // Simulate user registration logic
        // In a real application, save the user to a database
        if (!props.error) {
          props.message =
            `Thank you for signing up, ${name}! Please check your email (${email}) to verify your account.`;
        }
      }
    }
  },
};

export default signupBackendComponent;
