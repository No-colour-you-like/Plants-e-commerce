import React from "react";
import "./sign-in.scss";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../form-input/FormInput";
import CustomBtn from "../custom-btn/CustomBtn";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="sign-in_title">I already have an account</h2>
        <p className="sign-in_subtitle">
          Sign in width your email and password
        </p>
        <form onSubmit={this.handleSubmit} className="sign-in_form">
          <FormInput
            displayName="Email"
            name="Email"
            type="email"
            value={this.state.email}
            onChangeFunc={this.handleChange}
          />
          <FormInput
            displayName="Password"
            name="Password"
            type="password"
            value={this.state.password}
            onChangeFunc={this.handleChange}
          />
          <div className="sign-in_btns">
            <CustomBtn type="submit">Sign in</CustomBtn>
            <CustomBtn onClick={signInWithGoogle}>
              Sign in with Google
            </CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
