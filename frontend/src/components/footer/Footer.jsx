import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper">
        <div className="fLeft">
          SPARK ACCESSORIES
          <br />
          KUSHMA, PARBAT
          <br />
          NEPAL
        </div>

        <div className="fRight">
          <div className="routes">
            <span>Quick Links</span>
            <ul>
              <li>
                <NavLink
                  to="new-arrivals"
                  className="links"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "goldenrod" : "gray",

                      fontWeight: isActive ? "bold" : "normal",
                    };
                  }}
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
                      color: isActive ? "goldenrod" : "gray",

                      fontWeight: isActive ? "bold" : "normal",
                    };
                  }}
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
                      color: isActive ? "goldenrod" : "gray",

                      fontWeight: isActive ? "bold" : "normal",
                    };
                  }}
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
                      color: isActive ? "goldenrod" : "gray",

                      fontWeight: isActive ? "bold" : "normal",
                    };
                  }}
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
                      color: isActive ? "goldenrod" : "gray",

                      fontWeight: isActive ? "bold" : "normal",
                    };
                  }}
                >
                  Brand
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="connections">
        <h3>FOLLOW US ON..</h3>
        <div id="icons">
          <a
            href="https://www.facebook.com/profile.php?id=100088837773985"
            target="_blank"
          >
            <i>
              <FaFacebookF
                style={{
                  fontSize: "1.5em",
                }}
                className="icon"
              />
            </i>
          </a>

          <i>
            <FaTwitter
              style={{
                fontSize: "1.5em",
              }}
              className="icon"
            />
          </i>

          <a
            href="https://www.instagram.com/sparkaccessories5/"
            target="_blank"
          >
            <i>
              <FaInstagram
                style={{
                  fontSize: "1.5em",
                }}
                className="icon"
              />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
