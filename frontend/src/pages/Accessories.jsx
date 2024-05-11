import React from "react";
import CategoryView from "../components/Category_view/CategoryView";
import collection from "../assets/All_Collection/Data";
import Item from "../components/Item/Item";

const Accessories = () => {
  return (
    <div className="pack">
      <div className="collections">
        <CategoryView
          picture={"accessoriesImage.png"}
          heading="Accessories"
          description="Welcome to our Accessories page, where style meets fun for every girl! Dive into our delightful collection curated just for you, featuring an array of accessories that add charm and personality to every outfit.
    "
        />
        <div className="row">
          {collection
            .filter((item) => item.category === "accessories")
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

export default Accessories;
