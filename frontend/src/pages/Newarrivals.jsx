import React from "react";
import collection from "../assets/All_Collection/Data";
import Category_view from "../components/Category_view/CategoryView";
import Item from "../components/Item/Item";

const Newarrivals = () => {
  return (
    <div className="pack">
      <div className="collections">
        <Category_view
          picture={"newArrivals.webp"}
          heading="New In"
          description="The latest designer jewellery, all the Spark Accessories new releases are now here. Be the first grab our exciting products at the best prices."
        />
        <div className="row">
          {collection
            .filter((item) => item.category === "jewelry" && item.newArrivals)
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

export default Newarrivals;
