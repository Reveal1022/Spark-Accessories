import React from "react";
import "./page-styles/Brand.css";

const Brand = () => {
  return (
    <div className="video">
      <video autoPlay loop controls>
        <source src="wildlife.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  );
};

export default Brand;
