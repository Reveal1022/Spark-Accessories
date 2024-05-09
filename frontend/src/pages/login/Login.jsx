import React from "react";

import "./login.css";

const Login = () => {
  return (
    <div className="loginSignin">
      <div className="loginForm">
        <h3>Login</h3>
        <div className="login_details">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button id="login_btn">Login</button>
        </div>
      </div>
      <hr style={{ border: "0.5px solid #e0e0e0" }} />
      <div className="signInForm">
        <h3>Create An Account</h3>
        <div className="signinDetails">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button id="signInBtn">Create</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
