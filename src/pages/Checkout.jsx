import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import "../styles/checkout.css";

const stripePromise = loadStripe("pk_test_51Ovmi8KpjeUM4L6OyHfZRvbdCbVpULOWvIFWr9UgYOsELcEO2395F8LGDiXLFLAID4Far8E1TMGMGiAuiIKhM0oZ00jaLIXl7d");

const Checkout = () => {
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const stripe = useStripe(); // Define stripe variable using useStripe hook
  const elements = useElements();
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);


  const handleStripePayment = () => {
    // Redirect to the Stripe payment link
    window.location.href = "https://buy.stripe.com/test_5kA29gfgZ1MhbHq8ww";
  };

  

  const validateForm = () => {
    const errors = {};

    // Validation rules...

    return errors;
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Payment Information" />
      <section>
        <Container>
          <Row>
            
            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping Cost: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
                <button onClick={handleStripePayment} className="payment__btn">
                  Pay with Stripe
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const WrappedCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

export default WrappedCheckout;
