import React from "react";
import "./sidebar.css";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

const Sidebar = ({ onClose, show }) => {
  return (
    <div className={show ? "sideBar active" : "sideBar"}>
      <div className="bartop">
        <span>MENU</span>

        <button id="cancel" onClick={onClose}>
          <RxCross1
            style={{
              color: "#071d49",
              strokeWidth: "0.5px",
              fontSize: "18px",
            }}
          />
        </button>
      </div>
      <hr style={{ border: "0.5px solid #071d49" }} />

      <img
        src="image2.png"
        alt="no logo"
        className="logo2
      "
      />

      <div className="nav">
        <ul>
          <li>
            <NavLink
              to="new-arrivals"
              className="links"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}
              onClick={onClose}
            >
              New Arrivals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="collection"
              className="links"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}
              onClick={onClose}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="trending"
              className="links"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}
              onClick={onClose}
            >
              Trending
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cosmetics"
              className="links"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}
              onClick={onClose}
            >
              Cosmetics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="brand"
              className="links"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  textDecoration: isActive ? "underline" : "none",
                  fontWeight: isActive ? "bold" : "normal",
                };
              }}
              onClick={onClose}
            >
              Brand
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="barbottom">
        <a
          href="https://www.facebook.com/profile.php?id=100088837773985"
          target="_blank"
        >
          <FaFacebookF
            style={{
              fontSize: "1.5em",
              color: "#1877F2",
            }}
            className="icons"
          />
        </a>

        <FaTwitter
          style={{
            fontSize: "1.5em",
            color: "skyblue",
          }}
          className="icons"
        />

        <a href="https://www.instagram.com/sparkaccessories5/" target="_blank">
          <FaInstagram
            style={{
              fontSize: "1.5em",
              color: "#ee2a7b",
            }}
            className="icons"
          />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
