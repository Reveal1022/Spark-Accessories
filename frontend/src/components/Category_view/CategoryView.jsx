import React from "react";
import "./category_view.css";

const CategoryView = ({ picture, description, heading }) => {
  return (
    <div className="cat_view">
      <div className="view">
        <img src={picture} alt="Sorry Image Not Available" />
        <div className="desc_box">
          <div className="cat_desc">
            <h3 style={{ textTransform: "uppercase" }}>{heading}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
