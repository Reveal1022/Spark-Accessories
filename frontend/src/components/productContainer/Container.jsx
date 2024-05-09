import React from "react";
import Item from "../Item/Item";

import "./Container.css";

const Container = ({ fileName }) => {
  return (
    <div className="Pcontainer">
      {fileName.map((item, i) => {
        return (
          <div className="productList" key={i}>
            <Item
              key={i}
              id={item.id}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
              image={item.image}
              hoverImage={item.hoverImage}
              inContainer={true}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Container;
