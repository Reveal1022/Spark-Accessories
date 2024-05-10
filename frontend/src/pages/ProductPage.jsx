import React, { useContext } from "react";
import "./page-styles/Productpage.css";
import { useParams } from "react-router-dom";

import ProductDisplay from "../components/ProductDisplay/ProductDisplay.jsx";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div className="productDisplay">
      <ProductDisplay />
    </div>
  );
};

export default ProductPage;
