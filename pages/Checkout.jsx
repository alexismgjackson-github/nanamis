import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/cart";
import "./Checkout.css";

export default function Checkout() {
  const { cartItems, getCartTotal } = useContext(CartContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [formMessage, setFormMessage] = useState("");
  const [firstNameMessage, setFirstNameMessage] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
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

    if (formData.firstName.length === 0) {
      console.log("First name is invalid");
      setFirstNameMessage("Error: First name is required");
      setIsValid(false);
    } else {
      console.log("First name is valid");
      setFirstNameMessage("First name successfully submitted!");
      formData.firstName = "";
      setIsValid(true);
    }

    if (formData.lastName.length === 0) {
      console.log("Last name is invalid");
      setLastNameMessage("Error: Last name is required");
      setIsValid(false);
    } else {
      console.log("Second name is valid");
      setLastNameMessage("Last successfully submitted!");
      formData.lastName = "";
      setIsValid(true);
    }

    if (formData.email.length === 0) {
      console.log("Email is invalid");
      setEmailMessage("Error: Valid email is required");
      setIsValid(false);
    } else {
      console.log("Email is valid");
      setEmailMessage("Email successfully submitted!");
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

          <div className="personal-details-container">
            <h2 className="checkout-subheading">
              <span className="steps">2.</span> Enter Personal Details
            </h2>
            <form className="personal-details-form" onSubmit={handleSubmit}>
              {formMessage && (
                <span
                  className={`contact-message ${
                    isValid == true ? "contact-success" : "contact-error"
                  }`}
                >
                  {formMessage}
                </span>
              )}
              <label htmlFor="">First Name (required)</label>
              {firstNameMessage && (
                <span
                  className={`contact-message ${
                    isValid == true ? "contact-success" : "contact-error"
                  }`}
                >
                  {firstNameMessage}
                </span>
              )}
              <input
                type="text"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className="contact-form-input"
              />

              <label htmlFor="">Last Name (required)</label>
              {lastNameMessage && (
                <span
                  className={`contact-message ${
                    isValid == true ? "contact-success" : "contact-error"
                  }`}
                >
                  {lastNameMessage}
                </span>
              )}
              <input
                type="text"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="contact-form-input"
              />
              <label htmlFor="">Email (required)</label>
              {emailMessage && (
                <span
                  className={`contact-message ${
                    isValid == true ? "contact-success" : "contact-error"
                  }`}
                >
                  {emailMessage}
                </span>
              )}
              <input
                type="text"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="contact-form-input"
              />
            </form>
          </div>
          <hr />

          <div className="view-order-container">
            <h2 className="checkout-subheading">
              <span className="steps">3.</span> Review Your Order
            </h2>
            <div className="cart-container-content">
              <div className="cart">
                <div className="full-cart">
                  {cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-primary">
                        <span className="cart-item-quantity">
                          {item.quantity}
                        </span>
                        <p className="cart-item-name">{item.name}</p>
                        <span className="cart-item-price">${item.price}</span>
                      </div>
                      <div className="cart-item-secondary">
                        <p className="cart-item-flavor">{item.flavor}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="checkout-total">
                  <div className="checkout-total-primary">
                    <div className="checkout-subtotal-container">
                      <p className="checkout-subtotal">Item subtotal</p>
                      <span className="checkout-subtotal-number">
                        {getCartTotal()}
                      </span>
                    </div>
                    <div className="checkout-tax-container">
                      <p className="checkout-tax">Tax</p>
                      <span className="checkout-tax-number">$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-subtotal-btn-container">
              <Link to="/payment">
                <button className="payment-btn">Go To Payment</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
