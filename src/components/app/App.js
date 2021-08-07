import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from '../../pages/homepage/HomePage';
import Section from '../../pages/section/Section';
import Header from '../header/Header';
import SignInSignUp from '../../pages/signin-signup/SignInSignUp';
import SlideCart from '../slide-cart/SlideCart';

import { auth } from '../../firebase/firebase.utils';
import { createUserDoc } from '../../firebase/firebase.utils';
import { setCurrentUser } from '../../redux/user/user-reducer';

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
      <div className='App'>
        <Header />
        <SlideCart />
        <Switch>
          <Route exact path='/plants-e-commerce/' component={HomePage} />
          <Route
            path='/plants-e-commerce/plants'
            component={() => (
              <Section sectionData={this.props.sectionData[0]} />
            )}
          />
          <Route
            path='/plants-e-commerce/gifts'
            component={() => (
              <Section sectionData={this.props.sectionData[1]} />
            )}
          />
          <Route
            path='/plants-e-commerce/gardencare'
            component={() => (
              <Section sectionData={this.props.sectionData[2]} />
            )}
          />
          <Route
            path='/plants-e-commerce/wellness'
            component={() => (
              <Section sectionData={this.props.sectionData[3]} />
            )}
          />
          <Route
            path='/plants-e-commerce/art'
            component={() => (
              <Section sectionData={this.props.sectionData[4]} />
            )}
          />
          <Route
            path='/plants-e-commerce/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sectionData: state.products.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
