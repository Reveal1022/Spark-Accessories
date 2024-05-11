import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ProductContext } from "../../store/product";
import { CiStar } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiPolarStar } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { useCartContext } from "../../store/cart";

function ProductDisplay() {
  const { product } = useContext(ProductContext);
  const { setCartItems, cartItems } = useCartContext();
  const ItemsinCart = cartItems.find((item) => item.id == product.id);
  const addToCart = () => {
    if (ItemsinCart) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          name: product.name,
          image: product.image,
          new_price: product.new_price,
          id: product.id,
        },
      ]);
    }
  };

  return (
    <div className="myproductDetails">
      <div className="myproductImages">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>

      <div className="myDetails">
        <h2>{product.name}</h2>
        <h3>
          Previously was <span>${product.old_price}</span>
        </h3>
        <h3>
          Available at <span id="newPrice">${product.new_price}</span>
        </h3>
        <span id="star">
          <i>
            <CiStar />
          </i>
          <i>
            <CiStar />
          </i>
          <i>
            <CiStar />
          </i>
          <i>
            <CiStar />
          </i>
          <i>
            <CiStar />
          </i>
          <br />
          Reviews ( )
        </span>

        <button onClick={addToCart}>Add To Bag</button>
        <div className="quantity">
          <input type="text" placeholder="1" />
        </div>
        <div className="description">
          <h4>Description</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, nihil obcaecati! Labore inventore est praesentium
            optio non! Rem, repellat, quas aspernatur quam accusantium
            repellendus in enim magni molestias, nihil maxime!
          </p>
        </div>

        <div className="others">
          <span>
            <i>
              <LiaShippingFastSolid />
            </i>
            low delivery charges
          </span>
          <span>
            <i>
              <GiPolarStar />
            </i>
            over 1000 5-star reviews
          </span>
          <span>
            <i>
              <MdPayment />
            </i>
            we accept e-sewa, khalti, fonepay..
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
