import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import HomePage from "../../pages/homepage/HomePage";
import Section from "../../pages/section/Section";
import Header from "../header/Header";
import SignInSignUp from "../../pages/signin-signup/SignInSignUp";
import SlideCart from "../slide-cart/SlideCart";

import { auth } from "../../firebase/firebase.utils";
import { createUserDoc } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user-reducer";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDoc(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SlideCart />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/plants"
            component={() => (
              <Section productsData={this.props.productsData.data[0]} />
            )}
          />
          <Route
            path="/gifts"
            component={() => (
              <Section productsData={this.props.productsData.data[1]} />
            )}
          />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsData: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
