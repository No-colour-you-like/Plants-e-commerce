import React from "react";
import { connect } from "react-redux";
import "./cart-item.scss";

import { removeItem } from "../../redux/cart/cart-reducer";
import { changeQuantity } from "../../redux/cart/cart-reducer";

const CartItem = ({ itemInfo, removeItem, changeQuantity }) => {
  const { name, imageUrl, price, quantity } = itemInfo;

  return (
    <div className="cart-item">
      <div className="cart-item_image">
        <img src={imageUrl} alt="cart-item-img" />
      </div>
      <div className="cart-item_info">
        <h3 className="cart-item_name">{name}</h3>
        <div className="cart-item_price">${price}</div>
        <div className="cart-item_quantity">
          <button
            onClick={() => changeQuantity(itemInfo, "decr")}
            className="cart-item_quantity-btn"
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => changeQuantity(itemInfo, "incr")}
            className="cart-item_quantity-btn"
          >
            +
          </button>
        </div>
        <div onClick={() => removeItem(itemInfo)} className="cart-item_remove">
          Remove
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => dispatch(removeItem(item)),
    changeQuantity: (item, direction) =>
      dispatch(changeQuantity(item, direction)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
