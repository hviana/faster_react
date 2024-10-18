import React from "react";
import { route } from "@helpers/frontend/route.ts";

const SignUpPage = (props: any) => {
  const { name, email, password, message } = props;

  if (message) {
    return (
      <div className="signup-container">
        <h1>Sign Up Successful</h1>
        <p>{message}</p>
        <button className="btn" onClick={route({ path: "/pages/login" })}>
          Log In
        </button>
      </div>
    );
  } else {
    return (
      <div className="signup-container">
        <h1>Create an Account</h1>
        <form className="form" method="POST" action="/pages/signup">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input-field"
            required
          />
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
            Sign Up
          </button>
        </form>
      </div>
    );
  }
};

export default SignUpPage;
