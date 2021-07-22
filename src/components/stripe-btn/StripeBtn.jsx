import React from "react";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../img/logo.jpg";

const StripeCheckoutBtn = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51JFwctFl3tttYBPMOBc3Asvfge33IZlFuE8g90jnoQ48J284PDzFE5m298Og6ONWogjF1PFWprWOvJQHxW2CcjbY00P6DR9TNU";

  const onToken = (token) => {
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      className="stripe-btn"
      label="Pay Now"
      name="Plants"
      billingAddress
      shippingAddress
      description={`Your price is $${price}`}
      amount={stripePrice}
      token={onToken}
      stripeKey={publishableKey}
      image={logo}
    />
  );
};

export default StripeCheckoutBtn;
