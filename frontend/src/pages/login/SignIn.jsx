import React from "react";
import axios from "axios";
import { useState } from "react";
import "./login.css";

const SignIn = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="loginSignin">
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

export default SignIn;
