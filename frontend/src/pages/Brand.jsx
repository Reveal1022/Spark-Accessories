import React from "react";
import "./page-styles/Brand.css";

const Brand = () => {
  return (
    <div className="video">
      <video autoPlay loop controls>
        <source src="wildlife.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      <h1>Here is update!</h1>
    </div>
  );
};

export default Brand;
