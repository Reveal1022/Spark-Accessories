import React, { useState } from "react";
import { createContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    image: "",
    hoverImage: "",
    new_price: "",
    old_price: "",
  });

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
