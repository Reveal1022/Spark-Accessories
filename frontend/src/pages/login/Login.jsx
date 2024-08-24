import React from "react";
import axios from "axios";
import { useState } from "react";
import "./login.css";
import { Navigate, useNavigate } from "react-router-dom";
import { PiEye, PiEyeClosed } from "react-icons/pi";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [eyeOpen, setEyeOpen] = useState();
  const [type, setType] = useState("password");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error Occured", error);
    }
  };

  return (
    <div className="loginSignin">
      <div className="loginForm">
        <h3>Login</h3>
        <div className="login_details">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="password">
            <input
              type={type}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="eye">
              {type == "password" ? (
                <PiEyeClosed
                  onClick={() => {
                    setType("text");
                  }}
                />
              ) : (
                <PiEye
                  onClick={() => {
                    setType("password");
                  }}
                />
              )}
            </button>
          </div>
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
          <button id="login_btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
