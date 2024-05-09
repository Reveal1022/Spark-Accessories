import React from "react";
import collection from "../assets/All_Collection/Data";
import cosmetics from "../assets/All_Collection/Cosmetics";
import CategoryView from "../components/Category_view/CategoryView";
import Item from "../components/Item/Item";

const Trending = () => {
  return (
    <div className="pack">
      <div className="collections">
        <CategoryView
          picture={"trending.webp"}
          heading="Trending"
          description="Make your outfit more attractive with our popular collection.
        Adorn yourself in elegance, for every piece of jewelry tells a story of beauty and grace.
        "
        />
        <div className="row">
          {collection.map((items, i) => {
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

export default Trending;
