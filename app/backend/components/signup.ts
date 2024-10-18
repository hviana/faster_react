import { type BackendComponent } from "@helpers/backend/types.ts";

const signupBackendComponent: BackendComponent = {
  after: async (props) => {
    const { name, email, password } = props;

    if (name && email && password) {
      // Simulate user registration logic
      // In a real application, save the user to a database
      props.message =
        `Thank you for signing up, ${name}! Please check your email (${email}) to verify your account.`;
    }
  },
};

export default signupBackendComponent;
