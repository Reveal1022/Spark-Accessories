import { createContext, useContext } from "react";

const initialCartState = {
  setCartItems: () => {},
  cartItems: [],
};

const cartContext = createContext(initialCartState);

export const CartContextProvider = cartContext.Provider;

export const useCartContext = () => {
  const cart = useContext(cartContext);
  if (!cart) {
    throw new Error("Context not availble");
  }
  return cart;
};
