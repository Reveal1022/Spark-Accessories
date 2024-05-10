import React from "react";
import collection from "../assets/All_Collection/Data";

import Item from "../components/Item/Item";
import CategoryView from "../components/Category_view/CategoryView";
import "./page-styles/Cosmetics.css";

const Cosmetics = ({}) => {
  return (
    <div className="pack">
      <div className="collections">
        <CategoryView
          picture={"cosmeticsImage.jpeg"}
          heading="Cosmetics"
          description="Enhance your natural beauty with our curated collection of cosmetics, where every shade tells a story of confidence and empowerment.
        We have trusted products of best quality that are dermatologically tested within the best prices
        "
        />
        <div className="row">
          {collection
            .filter((item) => item.category === "cosmetics")
            .map((items, i) => {
              return (
                <div className="item" key={i}>
                  <Item
                    key={i}
                    id={items.id}
                    name={items.name}
                    old_price={items.old_price}
                    new_price={items.new_price}
                    image={items.image}
                    hoverImage={items.image}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cosmetics;
