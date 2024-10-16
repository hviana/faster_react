import { type BackendComponent } from "@helpers/backend/types.ts";
import { userValidations } from "../files/general.ts";
const loginBackendComponent: BackendComponent = {
  after: async (props) => {
    const { email, password } = props;

    if (!(await userValidations(props))) {
      props.error = "Invalid user";
      return;
    }

    if (email && password) {
      // Simulate user authentication logic
      // In a real application, verify the user's credentials
      if (email === "user@example.com" && password === "123") {
        props.user = { name: "John Doe", email };
      } else {
        props.error = "Invalid email or password.";
      }
    }
  },
};

export default loginBackendComponent;
