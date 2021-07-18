import React from "react";
import "./category-full.scss";
import { withRouter } from "react-router";

import Item from "../items/Item";

const CategoryFull = ({ productItems, history }) => {
  console.log(productItems);

  const { title, items } = productItems;
  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      <div className="category-content">
        {items.map((item) => (
          <Item key={item.id} itemInfo={item} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(CategoryFull);
