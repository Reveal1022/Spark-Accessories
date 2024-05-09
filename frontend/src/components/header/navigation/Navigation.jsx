import React from "react";
import "./navigation.css";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="navigationBar">
      <ul>
        <li>
          <NavLink
            to="new-arrivals"
            onClick={scrollToTop}
            className="links"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
                fontWeight: isActive ? "normal" : "normal",
                textTransform: isActive ? "uppercase" : "uppercase",
                fontSize: isActive ? "14px" : "13px",
              };
            }}
          >
            New Arrivals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="collection"
            onClick={scrollToTop}
            className="links"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
                fontWeight: isActive ? "normal" : "normal",
                textTransform: isActive ? "uppercase" : "uppercase",
                fontSize: isActive ? "14px" : "13px",
              };
            }}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="trending"
            onClick={scrollToTop}
            className="links"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
                fontWeight: isActive ? "normal" : "normal",
                textTransform: isActive ? "uppercase" : "uppercase",
                fontSize: isActive ? "14px" : "13px",
              };
            }}
          >
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink
            to="cosmetics"
            onClick={scrollToTop}
            className="links"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
                fontWeight: isActive ? "normal" : "normal",
                textTransform: isActive ? "uppercase" : "uppercase",
                fontSize: isActive ? "14px" : "13px",
              };
            }}
          >
            Cosmetics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="brand"
            onClick={scrollToTop}
            className="links"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                textDecoration: isActive ? "underline" : "none",
                fontWeight: isActive ? "normal" : "normal",
                textTransform: isActive ? "uppercase" : "uppercase",
                fontSize: isActive ? "14px" : "13px",
              };
            }}
          >
            Brand
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Navigation;
