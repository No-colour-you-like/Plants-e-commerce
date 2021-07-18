import React from "react";
import { connect } from "react-redux";
import "./item.scss";

import { addItem } from "../../redux/cart/cart-reducer";


const Item = ({ itemInfo, addItem}) => {
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={itemInfo.imageUrl} className="item-img" alt="item-img" />
        <div onClick={() => addItem(itemInfo)} className="item-add">
          Add to cart
        </div>
      </div>
      <div className="item-bottom">
        <p className="item-name">{itemInfo.name}</p>
        <p className="item-price">${itemInfo.price}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
