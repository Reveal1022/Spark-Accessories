import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import Shop from "./pages/Shop";
import Newarrivals from "./pages/Newarrivals";
import Trending from "./pages/Trending";
import Category from "./pages/Category";
import "./index.css";
import Cosmetics from "./pages/Cosmetics";
import Login from "./pages/login/Login";
import SignIn from "./pages/login/SignIn";
import { CartContextProvider } from "./store/cart";
import Accessories from "./pages/Accessories";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./store/product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="new-arrivals" element={<Newarrivals />} />
      <Route path="collection" element={<Shop />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="trending" element={<Trending />} />
      <Route path="cosmetics" element={<Cosmetics />} />
      <Route path="accessories" element={<Accessories />} />
      <Route path="brand" element={<Brand />} />
      <Route path="login" element={<Login />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="productPage" element={<ProductPage />}>
        <Route path=":productId" element={<ProductPage />} />
      </Route>
    </Route>
  )
);
const ContextProviders = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContextProvider value={{ cartItems, setCartItems }}>
      <ProductProvider>{children}</ProductProvider>
    </CartContextProvider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProviders>
      <RouterProvider router={router} />
    </ContextProviders>
  </React.StrictMode>
);
