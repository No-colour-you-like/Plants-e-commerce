import React from "react";
import "./sign-up.scss";

import FormInput from "../form-input/FormInput";
import CustomBtn from "../custom-btn/CustomBtn";
import { auth } from "../../firebase/firebase.utils";
import { createUserDoc } from "../../firebase/firebase.utils";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDoc(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="sign-up_title">I don't have account</h2>
        <p className="sign-up_subtitle">Sign up with your email and password</p>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            displayName="displayName"
            name="Your Name"
            type="text"
            value={displayName}
            onChangeFunc={this.handleChange}
          />
          <FormInput
            displayName="email"
            name="Email"
            type="email"
            value={email}
            onChangeFunc={this.handleChange}
          />
          <FormInput
            displayName="password"
            name="Password"
            type="password"
            value={password}
            onChangeFunc={this.handleChange}
          />
          <FormInput
            displayName="confirmPassword"
            name="Confirm Password"
            type="password"
            value={confirmPassword}
            onChangeFunc={this.handleChange}
          />
          <CustomBtn type="submit">Sign Up</CustomBtn>
        </form>
      </div>
    );
  }
}

export default SignUp;
