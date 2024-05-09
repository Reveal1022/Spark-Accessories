import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import "./Search.css";

const Search = ({ closeUp, show }) => {
  return (
    <div className={show ? "searchForm active" : "searchForm"}>
      <div className="searchbox">
        <input type="text" placeholder="Search Store..." />
        <button className="searchBtn">
          <CiSearch
            style={{
              color: "#282C35",
              fontSize: "2em",
            }}
          />
        </button>
      </div>
      <button id="cross">
        <RxCross1
          style={{
            strokeWidth: "0.5px",
            fontSize: "1.8em",
          }}
          onClick={closeUp}
        />
      </button>
    </div>
  );
};

export default Search;
