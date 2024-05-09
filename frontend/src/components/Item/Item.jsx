import React, { useState } from "react";
import "./Item.css";
import { GoPlus } from "react-icons/go";
import { useCartContext } from "../../store/cart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../store/product";

const Item = ({
  id,
  name,
  image,
  hoverImage,
  new_price,
  old_price,
  onAdd,
  inContainer,
}) => {
  const [isHovered, setIsHovered] = useState();
  const { setCartItems, cartItems } = useCartContext();
  const itemInCart = cartItems.find((item) => item.id === id);
  const handleClick = () => {
    if (itemInCart) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prev) => [...prev, { name, image, new_price, id }]);
    }
  };
  const { setProduct } = useContext(ProductContext);

  const productsetting = () => {
    setProduct({
      id,
      name,
      image,
      hoverImage,
      new_price,
      old_price,
    });
  };
  return (
    <div
      className={`item ${inContainer ? "container-item" : "shop-page-item"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/productPage/${id}`}>
        <div className="imageWrapper" onClick={productsetting}>
          <img src={isHovered ? hoverImage : image} alt="image" />
        </div>
      </Link>

      <button className="addtoBag" /* onClick={onAdd && show} */>
        <GoPlus
          style={{ fontWeight: "lighter", strokeWidth: "0.5px" }}
          onClick={handleClick}
        />
      </button>

      <h3>{name}</h3>
      <div className="price">
        <div className="newP">
          Is:
          <h5 id="newPrc">Rs {new_price}</h5>
        </div>
        <div className="oldP">
          Was:<h5 id="oldPrc">Rs {old_price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Item;
