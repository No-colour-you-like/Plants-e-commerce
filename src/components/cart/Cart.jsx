import React from "react";
import "./cart.scss";

import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart-reducer";

const Cart = ({ toggleCart, cartItems }) => {
  return (
    <div onClick={toggleCart} className="cart">
      <p className="cart-name">Cart</p>
      <p className="cart-value">{`(${
        cartItems ? sumCartItems(cartItems) : "(0)"
      })`}</p>
    </div>
  );
};

const sumCartItems = (items) =>
  items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: (cart) => dispatch(toggleCart(cart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
