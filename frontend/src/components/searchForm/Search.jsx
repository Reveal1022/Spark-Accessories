import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import collection from "../../assets/All_Collection/Data";
import "./Search.css";
import { ProductContext } from "../../store/product";
import { Link } from "react-router-dom";

const Search = ({ closeUp, show }) => {
  const [searchTag, setSearchTag] = useState("");
  const { setProduct } = useContext(ProductContext);

  // Filter the collection based on searchTag
  const filteredCollection = searchTag
    ? collection.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchTag.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTag.toLowerCase()) ||
          item.sub_category.toLowerCase().includes(searchTag.toLowerCase())
        );
      })
    : [];

  return (
    <div className={show ? "searchForm active" : "searchForm"}>
      <div className="searchbox">
        <h3>SEARCH</h3>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search Store..."
            value={searchTag}
            onChange={(event) => setSearchTag(event.target.value)}
          />
          <button className="searchBtn">
            <CiSearch
              style={{
                color: "#282C35",
                fontSize: "2em",
              }}
            />
          </button>
        </div>
        <div className="searchResult">
          {filteredCollection.length > 0
            ? filteredCollection.map((item, i) => (
                <div className="sItemList" key={i}>
                  <Link
                    to={`/productPage/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <SearchItem item={item} closeUp={closeUp} />
                  </Link>
                </div>
              ))
            : searchTag && (
                <div className="noResults">No such results found.</div>
              )}
        </div>
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

const SearchItem = ({ item, closeUp }) => {
  const { setProduct } = useContext(ProductContext);

  const productSetting = () => {
    setProduct({
      id: item.id,
      name: item.name,
      image: item.image,
      new_price: item.new_price,
      old_price: item.old_price,
    });
  };

  return (
    <div
      className="sItem"
      onClick={() => {
        productSetting();
        closeUp();
      }}
    >
      <img src={item.image} alt="No image" id="sImage" />
      <div className="sDetail">
        <h4>{item.name}</h4>
        <span>$ {item.new_price}</span>
      </div>
    </div>
  );
};
