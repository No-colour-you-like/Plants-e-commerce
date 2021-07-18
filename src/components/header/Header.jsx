import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import "./header.scss";
import Logo from "../../img/logo.jpg";
import Cart from "../cart/Cart";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo-img" src={Logo} alt="logo-img" />
      </Link>
      <div className="menu">
        <Link className="menu-link" to="/">
          Home
        </Link>
        {currentUser ? (
          <div className="menu-link" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="menu-link" to="/signin">
            Sign In
          </Link>
        )}
        <div className="menu-link" to="/contacts">
          <Cart />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps)(Header);
