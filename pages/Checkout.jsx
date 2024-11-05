import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/cart";
import "./Checkout.css";

export default function Checkout() {
  const { cartItems, getCartTotal } = useContext(CartContext);

  const [formData, setFormData] = useState({
    cardNumber: "",
    expiration: "",
    ccv: "",
    zipcode: "",
  });

  const [cardNumberMessage, setCardNumberMessage] = useState("");
  const [expirationMessage, setExpirationMessage] = useState("");
  const [ccvMessage, setCcvMessage] = useState("");
  const [zipcodeMessage, setZipcodeMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.cardNumber.length === 0) {
      console.log("Card number is invalid");
      setCardNumberMessage("Error: Card number is required");
      setIsValid(false);
    } else {
      console.log("Card number is valid");
      setCardNumberMessage("Card number successfully submitted!");
      formData.cardNumber = "";
      setIsValid(true);
    }

    if (formData.expiration.length === 0) {
      console.log("Expiration is invalid");
      setExpirationMessage("Error: Expiration date is required");
      setIsValid(false);
    } else {
      console.log("Expiration is valid");
      setExpirationMessage("Expiration date was successfully submitted!");
      formData.expiration = "";
      setIsValid(true);
    }

    if (formData.ccv.length === 0) {
      console.log("CCV is invalid");
      setCcvMessage("Error: Security code is required");
      setIsValid(false);
    } else {
      console.log("CCV is valid");
      setCcvMessage("Security code successfully submitted!");
      formData.email = "";
      setIsValid(true);
    }

    if (formData.zipcode.length === 0) {
      console.log("Zip code is invalid");
      setZipcodeMessage("Error: Zip code is required");
      setIsValid(false);
    } else {
      console.log("Zip code is valid");
      setZipcodeMessage("Zip code successfully submitted!");
      formData.email = "";
      setIsValid(true);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="checkout-container">
        <div className="back-to-cart-container">
          <Link className="back-to-cart-link" to="/cart">
            <img
              className="back-arrow-icon"
              src="assets/icons/arrow-back.svg"
              alt="Back arrow icon"
              aria-label="Go back to cart"
            />
            <span>Back To Cart</span>
          </Link>
        </div>
        <h1 className="checkout-heading">Checkout</h1>
        <div className="checkout-steps-container">
          <div className="timepicker-container">
            <h2 className="checkout-subheading">
              <span className="steps">1.</span> Choose Pickup Timeslot
            </h2>
            <form className="timepicker">
              <label htmlFor="pickup-time"></label>
              <select className="select" name="timeslot" id="timeslot">
                <option value="7:00AM-7:30AM">7:00AM - 7:30AM</option>
                <option value="7:30AM-8:00AM">7:30AM - 8:00AM</option>
                <option value="8:00AM-8:30AM">8:00AM - 8:30AM</option>
                <option value="8:30AM-9:00AM">8:30AM - 9:00AM</option>
                <option value="9:00AM-9:30AM">9:00AM - 9:30AM</option>
                <option value="9:30AM-10:00AM">9:30AM - 10:00AM</option>
                <option value="10:00AM-10:30AM">10:00AM - 10:30AM</option>
                <option value="10:30AM-11:00AM">10:30AM - 11:00AM</option>
                <option value="11:00AM-11:30AM">11:00AM - 11:30AM</option>
                <option value="11:30AM-12:00PM">11:30AM - 12:00PM</option>
                <option value="12:00PM-12:30PM">12:00PM - 12:30PM</option>
                <option value="12:30AM-1:00PM">12:30AM - 1:00PM</option>
                <option value="1:00PM-1:30PM">1:00PM - 1:30PM</option>
                <option value="1:30PM-2:00PM">1:30PM - 2:00PM</option>
                <option value="2:00PM-2:30PM">2:00PM - 2:30PM</option>
                <option value="2:30PM-3:00PM">2:30PM - 3:00PM</option>
              </select>
            </form>
          </div>
          <hr />

          <div className="view-order-container">
            <h2 className="checkout-subheading">
              <span className="steps">2.</span> Review Your Order
            </h2>
            <div className="cart-container-content">
              <div className="checkout-cart">
                <div className="checkout-full-cart">
                  {cartItems.map((item) => (
                    <div className="checkout-cart-item" key={item.id}>
                      <div className="checkout-cart-item-primary">
                        <span className="checkout-cart-item-quantity">
                          x {item.quantity}
                        </span>
                        <p className="checkout-cart-item-name">{item.name}</p>
                        <span className="checkout-cart-item-price">
                          ${item.price}
                        </span>
                      </div>
                      <div className="checkout-cart-item-secondary">
                        <p className="checkout-cart-item-flavor">
                          {item.flavor}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="checkout-total">
              <div className="checkout-total-primary">
                <div className="checkout-subtotal-container">
                  <p className="checkout-subtotal">Item Total</p>
                  <span className="checkout-subtotal-number">
                    {getCartTotal()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="details-container">
            <h2 className="checkout-subheading">
              <span className="steps">3.</span> Enter Payment Details
            </h2>
            <form className="details-form" onSubmit={handleSubmit}>
              <label htmlFor="">Card Number (required)</label>
              {cardNumberMessage && (
                <span
                  className={`checkout-message ${
                    isValid == true ? "checkout-success" : "checkout-error"
                  }`}
                >
                  {cardNumberMessage}
                </span>
              )}
              <input
                type="text"
                placeholder="1234-1234-1234-1234"
                maxLength={16}
                onChange={handleChange}
                name="cardNumber"
                value={formData.cardNumber}
                className="checkout-form-input"
              />

              <label htmlFor="" className="expiration-label">
                Expiration (required)
              </label>
              {expirationMessage && (
                <span
                  className={`checkout-message ${
                    isValid == true ? "checkout-success" : "checkout-error"
                  }`}
                >
                  {expirationMessage}
                </span>
              )}
              <input
                type="date"
                onChange={handleChange}
                name="expiration"
                value={formData.expiration}
                className="checkout-form-input"
              />

              <label htmlFor="" className="ccv-label">
                CCV (required)
              </label>
              {ccvMessage && (
                <span
                  className={`checkout-message ${
                    isValid == true ? "checkout-success" : "checkout-error"
                  }`}
                >
                  {ccvMessage}
                </span>
              )}
              <input
                type="password"
                maxLength={3}
                placeholder="123"
                onChange={handleChange}
                name="ccv"
                value={formData.ccv}
                className="checkout-form-input"
              />

              <label htmlFor="">ZIP Code (required)</label>
              {zipcodeMessage && (
                <span
                  className={`checkout-message ${
                    isValid == true ? "checkout-success" : "checkout-error"
                  }`}
                >
                  {zipcodeMessage}
                </span>
              )}
              <input
                type="text"
                placeholder="12345"
                maxLength={5}
                onChange={handleChange}
                name="zipcode"
                value={formData.zipcode}
                className="checkout-form-input"
              />

              <div className="checkout-subtotal-btn-container">
                <button type="submit" className="payment-btn">
                  Complete Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
