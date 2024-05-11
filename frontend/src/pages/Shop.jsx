import React from "react";
import collection from "../assets/All_Collection/Data";
import { useParams } from "react-router-dom";
import Item from "../components/Item/Item";
import "./page-styles/Shop.css";
import CategoryView from "../components/Category_view/CategoryView";
import { useCartContext } from "../store/cart";

const Shop = () => {
  const { cartItems, setCartItems } = useCartContext();
  return (
    <div className="pack">
      <div className="collections">
        <CategoryView
          picture={"shop.jpeg"}
          heading="All Jewellery"
          description="Effortless wearable jewellery at Spark Accessories. Pared-back to perfection, meet the latest must-have addition to your wardrobe. All our pieces are unique. Just add, combine, stack, repeat. The question is which piece will be the next in your jewellery collection?

        "
        />
        <div className="row">
          {collection
            .filter((item) => item.category === "jewelry")
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

export default Shop;
