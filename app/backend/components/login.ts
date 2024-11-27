import { type BackendComponent } from "@helpers/backend/types.ts";
import { Server } from "faster";
import { pbkdf2Verify } from "../files/pbkdf2.ts";
import { Token } from "faster";
import { JSONObject } from "@helpers/types.ts";
const loginBackendComponent: BackendComponent = {
  after: async (props) => {
    const { email, password } = props;

    if (email && password) {
      const user: JSONObject = (await Server.kv.get(["users", email])).value;
      if (!user) {
        props.error = "Invalid username or password";
      }
      if (!props.error) {
        if (await pbkdf2Verify(user.password as string, password as string)) {
          props.user = user;
          delete props.user["password"];
          props.token = await Token.generate({});
        } else {
          props.error = "Invalid username or password";
        }
      }
    }
  },
};

export default loginBackendComponent;
