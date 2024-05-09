import React from "react";
import "./categories.css";

const Categories = () => {
  return (
    <div className="container">
      <div className="content">
        <h2>CATEGORIES</h2>
        <div className="category">
          <ul>
            <li>
              <img src="Bracelets.webp" alt="" />
              <strong>Bracelets</strong>
            </li>
            <li>
              <img src="Earrings.webp" alt="" />
              <strong>Earrings</strong>
            </li>
            <li>
              <img src="Necklaces.webp" alt="" />
              <strong>Necklaces</strong>
            </li>
            <li>
              <img src="Rings.webp" alt="" />
              <strong>Rings</strong>
            </li>
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
