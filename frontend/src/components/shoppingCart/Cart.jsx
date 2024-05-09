import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import Item from "../Item/Item";
import "./Cart.css";
import { useCartContext } from "../../store/cart";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Cart = ({ cartClose, show }) => {
  const { cartItems, setCartItems } = useCartContext();

  return (
    <div className={show ? "cart active" : "cart"}>
      <button id="cross">
        <RxCross1
          style={{
            strokeWidth: "0.5px",
            fontSize: "1.8em",
          }}
          onClick={cartClose}
        />
      </button>
      <div className="shoplist">
        <h3>Your Bag</h3>
        <hr />
        <div className="cartitems">
          {cartItems.map((item, i) => {
            return <CartItem item={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;

const CartItem = ({ item }) => {
  const { cartItems, setCartItems } = useCartContext();

  const removeItem = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemToRemove.id));
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const increase = (id) => {
    const newCartItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: (item.quantity || 1) + 1,
          }
        : item
    );
    setCartItems(newCartItems);
  };

  const decrease = (id) => {
    const newCartItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: (item.quantity || 1) - 1,
          }
        : item
    );
    setCartItems(newCartItems);
  };
  return (
    <div>
      <div className="cartitem">
        <div id="itemImg">
          <img src={item.image} alt="no image" />
        </div>
        <div id="detail">
          {item.name}
          <br />
          <p>Price : Rs {item.new_price}</p>
          <div className="counter">
            <button onClick={() => increase(item.id)}>
              <FaPlus />
            </button>

            <input
              type="text"
              value={item.quantity || 1}
              onChange={handleChange}
            />
            <button onClick={() => decrease(item.id)}>
              <FaMinus />
            </button>
          </div>
          <button id="removeBtn" onClick={() => removeItem(item)}>
            Remove
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};
