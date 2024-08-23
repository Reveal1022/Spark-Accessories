import React from "react";
import axios from "axios";
import { useState } from "react";
import "./login.css";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  return (
    <div className="loginSignin">
      <div className="loginForm">
        <h3>Login</h3>
        <div className="login_details">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="spans">
            <span
              onClick={() => {
                navigate("/signIn");
              }}
            >
              Create Account?
            </span>
            <span>Forgot Password?</span>
          </div>
          <button id="login_btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
