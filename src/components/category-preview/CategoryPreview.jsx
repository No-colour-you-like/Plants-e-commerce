import React from "react";
import Item from "../items/Item";

import { Link } from "react-router-dom";

import "./category-preview.scss";

const CategoryPreview = ({ productData }) => {
  const { title, items, routeName } = productData;
  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      <div className="category-content">
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <Item key={item.id} itemInfo={item} />
          ))}
      </div>
      <Link to={`/${routeName}`} className="category_show-all">
        Show All
      </Link>
    </div>
  );
};

export default CategoryPreview;
