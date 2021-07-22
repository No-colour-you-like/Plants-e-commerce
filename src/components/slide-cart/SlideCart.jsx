import React from "react";
import { connect } from "react-redux";

import "./slide-cart.scss";
import closeBtn from "../../img/close.png";

import { toggleCart } from "../../redux/cart/cart-reducer";
import CartItem from "../cart-item/CartItem";
import StripeCheckoutBtn from "../stripe-btn/StripeBtn";

const SlideCart = ({ hiddenCart, toggleCart, cartItems, totalPrice }) => {
  return (
    <div
      style={
        hiddenCart
          ? { transform: "translateX(110%)" }
          : { transform: "translateX(0)" }
      }
      className="slide-cart"
    >
      <div className="slide-cart_top">
        <h2 className="slide-cart_title">Cart</h2>
        <img onClick={toggleCart} src={closeBtn} alt="close-btn" />
      </div>
      <div className="slide-cart_content">
        {cartItems.map((item) => {
          return <CartItem key={item.id} itemInfo={item} />;
        })}
      </div>
      <div className="slide-cart_checkout">
        <div className="slide-cart_warning">
          <p>Use the following test credit card for payments</p>
          <p>4242 4242 4242 4242 - Exp: 01/22 - CW: 123</p>
        </div>
        <div className="slide-cart_total">
          <p className="slide-cart_total-title">Total:</p>
          <div className="slide-cart_total-price">${totalPrice}</div>
          <StripeCheckoutBtn price={totalPrice} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hiddenCart: state.cart.hiddenCart,
    cartItems: state.cart.cartItems,
    totalPrice: state.cart.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: (cart) => dispatch(toggleCart(cart)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideCart);
