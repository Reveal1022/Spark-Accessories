import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = ({}) => {
  return (
    <div className="banner">
      <div className="desc">
        <h1>Accessories</h1>
        <p style={{ color: "#efe3b8" }}>
          Accessories You are looking for are here.
        </p>
        <h3 id="smallone">Buy Our Accessories</h3>
        <Link to="collection" style={{ textDecoration: "none" }}>
          <button id="Nbtn">shop now</button>
        </Link>
      </div>
      <div className="image">
        <Link to="collection">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
