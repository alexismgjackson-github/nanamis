import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/cart";
import { ScrollContext } from "../Context/scroll";
import "./Checkout.css";

export default function Checkout() {
  // Destructuring functions and values from CartContext to manage cart state
  const {
    cartItems,
    clearCart,
    getCartItemTotal,
    getCartSubTotal,
    getTaxTotal,
    getGrandTotal,
  } = useContext(CartContext);

  // Using useNavigate to redirect after form submission
  const navigate = useNavigate();

  // State to store form data (payment details)
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiration: "",
    ccv: "",
    zipcode: "",
  });

  // Handle form input changes and update state accordingly
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // Handle form submission - clear cart and navigate to order completion page
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    clearCart(); // Clear all items from the cart
    navigate(`/ordercomplete`); // Redirect to the order complete page
  }

  // Scroll to top when component mounts (for better user experience)
  const { scrollToTop } = useContext(ScrollContext);
  scrollToTop();

  return (
    <>
      <div className="checkout-container">
        {/* Back to cart link */}
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
          {/* Step 1: Choose Pickup Time Slot */}
          <div className="timepicker-container">
            <h2 className="checkout-subheading">
              <span className="steps">1.</span> Choose Pickup Timeslot
            </h2>
            <form className="timepicker">
              <label htmlFor="timeslot"></label>
              <select className="select" id="timeslot">
                {/* Timeslot options */}
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

          {/* Step 2: Review Your Order */}
          <div className="view-order-container">
            <h2 className="checkout-subheading">
              <span className="steps">2.</span> Review Your Order
            </h2>
            <div className="cart-container-content">
              <div className="checkout-cart">
                <div className="checkout-full-cart">
                  {/* Loop through cart items and display them */}
                  {cartItems.map((item) => (
                    <div className="checkout-cart-item" key={item.id}>
                      <div className="checkout-cart-item-primary">
                        <p className="checkout-cart-item-name">{item.name}</p>
                        <p className="checkout-cart-item-flavor">
                          {item.flavor}
                        </p>
                        <span className="checkout-cart-item-price">
                          ${item.price} each
                        </span>
                        <span className="checkout-cart-item-quantity">
                          {item.quantity} QTY ({getCartItemTotal(item)})
                        </span>
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
              {/* Display subtotal, tax, and grand total */}
              <div className="checkout-order-subtotal-container">
                <p className="checkout-order-subtotal">Order Subtotal</p>
                <span className="checkout-order-subtotal-number">
                  {getCartSubTotal()}
                </span>
              </div>
              <div className="checkout-order-subtotal-container">
                <p className="checkout-order-subtotal">Tax Total</p>
                <span className="checkout-order-subtotal-number">
                  {getTaxTotal()}
                </span>
              </div>
              <div className="checkout-order-subtotal-container">
                <p className="checkout-order-subtotal">Grand Total</p>
                <span className="checkout-order-subtotal-number">
                  {getGrandTotal()}
                </span>
              </div>
            </div>
          </div>

          <hr />

          {/* Step 3: Enter Payment Details */}
          <div className="details-container">
            <h2 className="checkout-subheading">
              <span className="steps">3.</span> Enter Payment Details
            </h2>
            <form className="details-form" onSubmit={handleSubmit}>
              {/* Form fields for credit card details */}
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
                value={formData.expiration}
                className="checkout-form-input date"
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
                className="checkout-form-input ccv"
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
                className="checkout-form-input zipcode"
                pattern="^[0-9]+$"
                required
              />
              <div className="checkout-complete-order-container">
                <button className="payment-btn" onSubmit={handleSubmit}>
                  Complete Order ({getGrandTotal()})
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
