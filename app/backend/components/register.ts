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

    props.updated = false;
    props.uploadedAvatar = avatarUrl || "";
    if (name && email) {
      if (!validateEmail(email as string)) {
        props.error = "Invalid email";
      }
      if (!name) {
        props.error = "Fill in the name";
      }
      const exists = (await Server.kv.get(["users", email])).value;
      if (update) {
        if (password) {
          props.updated = true;
        }
        if (name != exists.name) {
          props.updated = true;
        }
        if (email != exists.email) {
          props.updated = true;
        }
        if (avatarUrl != exists.avatarUrl) {
          props.updated = true;
        }
        if (!password) {
          password = exists.password;
        } else {
          if (checkPasswordStrength(password as string) < 1) {
            props.error = "Very weak password";
          }
          password = await pbkdf2(password as string);
          props.password = "";
        }
      } else {
        if (exists) {
          props.error = "User already exists";
        }
        if (checkPasswordStrength(password as string) < 1) {
          props.error = "Very weak password";
        }
        password = await pbkdf2(password as string);
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
          if (props.updated) {
            props.message = "Updated successfully, log in again to view.";
          } else {
            props.message =
              `Thank you for signing up, ${name}! Please check your email (${email}) to verify your account.`;
          }
        } else {
          props.message = "";
        }
      }
    }
  },
};

export default signupBackendComponent;
