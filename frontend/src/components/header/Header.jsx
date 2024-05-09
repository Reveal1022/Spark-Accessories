import React from "react";

import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag, HiOutlineBars3 } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";

import Navigation from "./navigation/Navigation";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ onOpen, openUp, cartOpen }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header>
      <div className="upper_part">
        <div id="buttons">
          <button className="bar" onClick={onOpen}>
            <HiOutlineBars3
              style={{
                color: "#282C35",
                strokeWidth: "0.7px",
                fontSize: "2em",
              }}
            />
          </button>
          <button className="search_bar" onClick={openUp}>
            <CiSearch
              style={{
                color: "#282C35",
                fontSize: "2em",
              }}
            />
            <span>SEARCH</span>
          </button>
        </div>
        <div id="logo">
          <Link onClick={scrollToTop}>
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="r-icons">
          <Link to="login">
            <LuUser2
              style={{
                fontSize: "2em",
                strokeWidth: "0.8px",
                color: "#071d49",
              }}
            />
          </Link>

          <HiOutlineShoppingBag
            style={{
              fontSize: "2em",
              strokeWidth: "0.8px",
              color: "#071d49",
              marginBottom: "5px",
            }}
            onClick={cartOpen}
          />
        </div>
      </div>
      <hr />
      <div className="lower_part">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
