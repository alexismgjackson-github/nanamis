import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/cart";
import "./Checkout.css";

export default function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiration: "",
    ccv: "",
    zipcode: "",
  });

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

    if (formData.cardHolder.length > 0) {
      // console.log("Card holder name is valid");
      formData.cardHolder = "";
      setIsValid(true);
    }

    if (formData.cardNumber.length > 0) {
      // console.log("Card number is valid");
      formData.cardNumber = "";
      setIsValid(true);
    }

    if (formData.expiration.length > 0) {
      // console.log("Expiration is valid");
      formData.expiration = "";
      setIsValid(true);
    }

    if (formData.ccv.length > 0) {
      // console.log("CCV is valid");
      formData.ccv = "";
      setIsValid(true);
    }

    if (formData.zipcode.length > 0) {
      // console.log("Zip code is valid");
      formData.zipcode = "";
      setIsValid(true);
    }

    clearCart();
    navigate(`/ordercomplete`);
  }

  // console.log(formData);

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
              <label htmlFor="timeslot"></label>
              <select className="select" id="timeslot">
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
                          {item.quantity} QTY
                        </span>
                        <p className="checkout-cart-item-name">{item.name}</p>
                        <span className="checkout-cart-item-price">
                          ${item.price}
                        </span>
                        <p className="checkout-cart-item-flavor">
                          {item.flavor}
                        </p>{" "}
                      </div>
                      <div className="checkout-cart-item-secondary">
                        <img src={item.url} className="checkout-item-img" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="checkout-total">
              <div className="checkout-order-total-container">
                <p className="checkout-order-total">Order Total</p>
                <span className="checkout-order-total-number">
                  {getCartTotal()}
                </span>
              </div>
            </div>
          </div>
          <hr />

          <div className="details-container">
            <h2 className="checkout-subheading">
              <span className="steps">3.</span> Enter Payment Details
            </h2>
            <form className="details-form" onSubmit={handleSubmit}>
              <label>Card Holder Name (required)</label>
              <input
                type="text"
                placeholder="Kento Nanami"
                onChange={handleChange}
                name="cardHolder"
                value={formData.cardHolder}
                className="checkout-form-input"
                spellCheck="false"
                required
              />
              <label>Card Number (required)</label>
              <input
                type="text"
                placeholder="1234-1234-1234-1234"
                maxLength={16}
                onChange={handleChange}
                name="cardNumber"
                value={formData.cardNumber}
                className="checkout-form-input"
                pattern="^[0-9]+$"
                required
              />
              <label className="expiration-label">
                Expiration Date (required)
              </label>
              <input
                type="month"
                onChange={handleChange}
                name="expiration"
                min={"2025-01"}
                value={formData.expiration}
                className="checkout-form-input"
                required
              />
              <label className="ccv-label">Security Code (required)</label>
              <input
                type="password"
                maxLength={3}
                placeholder="123"
                onChange={handleChange}
                name="ccv"
                value={formData.ccv}
                className="checkout-form-input"
                pattern="^[0-9]+$"
                required
              />
              <label>ZIP Code (required)</label>
              <input
                type="text"
                placeholder="12345"
                maxLength={5}
                onChange={handleChange}
                name="zipcode"
                value={formData.zipcode}
                className="checkout-form-input"
                pattern="^[0-9]+$"
                required
              />
              <div className="checkout-complete-order-container">
                <button className="payment-btn" onSubmit={handleSubmit}>
                  Complete Order ({getCartTotal()})
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
