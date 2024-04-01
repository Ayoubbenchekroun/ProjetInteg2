import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import "../styles/checkout.css";

const stripePromise = loadStripe("pk_test_51Ovmi8KpjeUM4L6OyHfZRvbdCbVpULOWvIFWr9UgYOsELcEO2395F8LGDiXLFLAID4Far8E1TMGMGiAuiIKhM0oZ00jaLIXl7d");

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    postalCode: "",
  });
  const [errors, setErrors] = useState({});

  const stripe = useStripe(); // Define stripe variable using useStripe hook
  const elements = useElements();
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);

  useEffect(() => {
    // Check if shipping info is available in localStorage
    const storedShippingInfo = localStorage.getItem("shippingInfo");
    if (storedShippingInfo) {
      // If available, parse and set the shipping info
      setShippingInfo(JSON.parse(storedShippingInfo));
    }
  }, []);
  const paymentLink = `https://buy.stripe.com/test_5kA29gfgZ1MhbHq8ww?totalAmount=${totalAmount}`;
  const handleStripePayment = () => {
    // Redirect to the Stripe payment link
    window.location.href = paymentLink;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Proceed with payment submission
      try {
        const { error } = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardElement),
          billing_details: {
            name: shippingInfo.name,
          },
        });

        if (error) {
          console.error("Payment method error:", error);
          setErrors({ payment: error.message });
        } else {
          localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));
          alert("Payment information saved!");
          // Redirect to the Stripe payment link
          handleStripePayment();
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ payment: "An error occurred while processing your payment." });
      }
    } else {
      // Display validation errors
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
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
            <Col lg="8" md="6">
              <h6 className="mb-4">Enter your Shipping Details</h6>
              <form className="payment__form" onSubmit={handleSubmit}>
                {/* Shipping details */}
                <div className="form__group">
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                    value={shippingInfo.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="error">{errors.name}</div>}
                  </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    value={shippingInfo.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    required
                    value={shippingInfo.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="error">{errors.phone}</div>}
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    required
                    value={shippingInfo.country}
                    onChange={handleChange}
                  />
                  {errors.country && <div className="error">{errors.country}</div>}
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    required
                    value={shippingInfo.city}
                    onChange={handleChange}
                  />
                  {errors.city && <div className="error">{errors.city}</div>}
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    name="postalCode"
                    required
                    value={shippingInfo.postalCode}
                    onChange={handleChange}
                  />
                  {errors.postalCode && <div className="error">{errors.postalCode}</div>}
                </div>
                <button type="submit" className="payment__btn">
                  Pay Now
                </button>
              </form>
            </Col>
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