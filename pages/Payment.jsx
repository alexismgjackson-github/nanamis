import { useState } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";

export default function Paymentt() {
  return (
    <>
      <div className="payment-container">
        <div className="back-to-checkout-container">
          <Link className="back-to-checkout-link" to="/checkout">
            <img
              className="back-arrow-icon"
              src="assets/icons/arrow-back.svg"
              alt="Back arrow icon"
              aria-label="Go back to checkout"
            />
            <span>Back To Checkout</span>
          </Link>
        </div>
        <h1 className="payment-heading">Payment</h1>
      </div>
    </>
  );
}
