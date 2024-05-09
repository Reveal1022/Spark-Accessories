import React from "react";
import { NavLink } from "react-router-dom";
import Categories from "../components/category/Categories";
import Banner from "../components/banner/Banner";

import data_product from "../assets/Sample/Sample";
import Item from "../components/Item/Item";
import "./page-styles/home.css";
import Container from "../components/productContainer/Container";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="components">
      <Banner />

      <div
        className="catSection"
        style={{ backgroundColor: "white", width: "100%" }}
      >
        <Categories />
      </div>

      <div className="Section">
        <h3 id="newSection">New Arrivals</h3>
        <Container fileName={data_product} />
      </div>

      <div className="cosmeticsBanner">
        <img
          src="CosBanner.png"
          alt="Sorry, no image found."
          className="cosBanner"
        />

        <Link to="cosmetics" className="cosmeticLink">
          <button>Shop now</button>
        </Link>
      </div>

      <div className="Section">
        <h3 id="newSection">Best Sellers</h3>
        <Container fileName={data_product} />
      </div>

      <img src="ANAIS.png" alt="image" className="bottom_img" />
    </div>
  );
};

export default Home;
