import React from "react";
import { useParams } from "react-router-dom";
import collection from "../assets/All_Collection/Data";
import Item from "../components/Item/Item";
import CategoryView from "../components/Category_view/CategoryView";
import categorie from "../assets/All_Collection/Category";

const Category = () => {
  const { category } = useParams();

  // Find the category object that matches the category obtained from useParams
  const matchedCategory = categorie.find(
    (cat) => cat.category.toLowerCase() === category.toLowerCase()
  );

  // Extract picture and description from the matched category object
  const { image: categoryImage, description: categoryDescription } =
    matchedCategory || {};

  return (
    <div className="pack">
      <div className="collections">
        <CategoryView
          picture={categoryImage}
          heading={category}
          description={categoryDescription}
        />

        <div className="row">
          {collection
            .filter((item) => item.sub_category === category)
            .map((item, i) => {
              return (
                <div className="item" key={i}>
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    old_price={item.old_price}
                    new_price={item.new_price}
                    image={item.image}
                    hoverImage={item.image}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Category;
