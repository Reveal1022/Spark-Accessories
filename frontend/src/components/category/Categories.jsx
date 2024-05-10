import React from "react";
import "./categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container">
      <div className="content">
        <h2>CATEGORIES</h2>
        <div className="category">
          <ul>
            <Link
              to="/category/bracelets"
              style={{ textDecoration: "none", color: "#071d49" }}
            >
              <li>
                <img src="Bracelets.webp" alt="" />
                <strong>Bracelets</strong>
              </li>
            </Link>
            <Link
              to="/category/earrings"
              style={{ textDecoration: "none", color: "#071d49" }}
            >
              <li>
                <img src="Earrings.webp" alt="" />
                <strong>Earrings</strong>
              </li>
            </Link>
            <Link
              to="/category/necklaces"
              style={{ textDecoration: "none", color: "#071d49" }}
            >
              <li>
                <img src="Necklaces.webp" alt="" />
                <strong>Necklaces</strong>
              </li>
            </Link>
            <Link
              to="/category/rings"
              style={{ textDecoration: "none", color: "#071d49" }}
            >
              <li>
                <img src="Rings.webp" alt="" />
                <strong>Rings</strong>
              </li>
            </Link>
            <li>
              <img src="others.jpeg" alt="" />
              <strong>Accessories</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
