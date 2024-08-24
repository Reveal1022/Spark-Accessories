import React from "react";
import axios from "axios";
import { useState } from "react";
import "./login.css";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState("password");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        firstName,
        lastName,
        email,
        password,
      });

      navigate("/login");

      console.log(response);
    } catch (error) {
      console.error(
        "Error occurred:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="loginSignin">
      <div className="signInForm">
        <h3>Create An Account</h3>
        <div className="signinDetails">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
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

          <button id="signInBtn" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
