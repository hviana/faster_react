import React from "react";
import { route } from "@helpers/frontend/route.ts";

const LoginPage = (props: any) => {
  const { email, password, user, error } = props;

  if (user) {
    route({
      path: "/pages/dashboard",
      content: { user: user },
    })();
  } else {
    return (
      <div className="login-container">
        <h1>Welcome Back</h1>
        <h4>
          Test - <u>email:</u> user@example.com <u>password:</u> 123
        </h4>
        {error && <p className="error">{error}</p>}
        <form className="form" method="POST" action="/pages/login">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            required
          />
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
      </div>
    );
  }
};

export default LoginPage;
