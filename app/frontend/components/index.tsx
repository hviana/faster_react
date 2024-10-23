import React from "react";
import { route } from "@helpers/frontend/route.ts";

const HomePage = (props: any) => {
  return (
    <div className="home-container">
      <h1>Welcome to My SaaS Application</h1>
      <p>Empower your business with our solution.</p>
      <div className="button-group">
        <button className="btn" onClick={route({ path: "/pages/signup" })}>
          Sign Up
        </button>
        <button className="btn" onClick={route({ path: "/pages/login" })}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default HomePage;
