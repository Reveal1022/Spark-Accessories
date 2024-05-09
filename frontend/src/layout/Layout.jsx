import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sideNavigation/Sidebar";
import "./layout.css";
import "../index.css";
import Search from "../components/searchForm/Search";
import Cart from "../components/shoppingCart/Cart";
import Breadcrum from "../components/breadcrum/Breadcrum";

const Layout = () => {
  const [showBar, setShowBar] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleSidebarOpen = () => {
    setShowBar(true);
    setShowBox(false); // Close the search box when opening the sidebar
    setShowCart(false); // Close the cart when opening the sidebar
  };

  // Function to handle opening the search box
  const handleSearchOpen = () => {
    setShowBox(true);
    setShowBar(false); // Close the sidebar when opening the search box
    setShowCart(false); // Close the cart when opening the search box
  };

  // Function to handle opening the cart
  const handleCartOpen = () => {
    setShowCart(true);
    setShowBar(false); // Close the sidebar when opening the cart
    setShowBox(false); // Close the search box when opening the cart
  };

  return (
    <div className="layout">
      <div className="header">
        <Header
          onOpen={handleSidebarOpen}
          openUp={handleSearchOpen}
          cartOpen={handleCartOpen}
        />
      </div>

      <Breadcrum />

      <Sidebar
        onClose={() => {
          setShowBar(!showBar);
        }}
        show={showBar}
      />

      <Search
        closeUp={() => {
          setShowBox(!showBox);
        }}
        show={showBox}
      />

      <Cart
        cartClose={() => {
          setShowCart(!showCart);
        }}
        show={showCart}
      />

      {(showBar || showBox || showCart) && <div className="overlay"></div>}

      <div className="hero">
        <Outlet />
      </div>

      <hr />
      <div className="footer">
        <Footer />
      </div>
      <hr />
    </div>
  );
};

export default Layout;
