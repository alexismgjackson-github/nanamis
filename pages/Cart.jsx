import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cart";
import { ScrollContext } from "../Context/scroll";
import "./Cart.css";

export default function Cart() {
  // Destructuring functions and values from the CartContext to manage cart state
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getCartItemTotal,
    getCartSubTotal,
    getTaxTotal,
    getGrandTotal,
  } = useContext(CartContext);

  // Getting scrollToTop function from ScrollContext to handle scrolling behavior
  const { scrollToTop } = useContext(ScrollContext);

  // Call scrollToTop to scroll the page to the top when the component is mounted
  scrollToTop();

  return (
    <>
      <div className="cart-container">
        <h1 className="cart-heading">Your Cart</h1>
        <div className="cart-container-content">
          {/* If there are items in the cart, render cart details */}
          {cartItems.length > 0 ? (
            <div className="cart">
              {/* Button to clear the entire cart */}
              <div className="clear-cart">
                <button
                  className="clear-cart-btn"
                  onClick={() => {
                    clearCart(); // Clears all items in the cart
                  }}
                  aria-label="Remove all items from cart"
                >
                  Clear Cart
                </button>
              </div>

              {/* Loop through the cartItems array and render each item */}
              <div className="full-cart">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-primary">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-flavor">{item.flavor}</p>
                      <span className="cart-item-price">
                        ${item.price} each
                      </span>
                      <span className="cart-item-quantity">
                        {item.quantity} QTY ({getCartItemTotal(item)})
                      </span>
                    </div>

                    {/* Section for the image and quantity control buttons */}
                    <div className="cart-item-secondary">
                      <img src={item.url} className="cart-item-img" />
                      <div className="quantity-btns">
                        {/* Decrease item quantity button */}
                        <button
                          className="decrement-btn"
                          onClick={() => {
                            removeFromCart(item); // Removes one quantity of the item
                          }}
                          aria-label="Decrease item quantity by 1"
                        >
                          -
                        </button>
                        {/* Increase item quantity button */}
                        <button
                          className="increment-btn"
                          onClick={() => {
                            addToCart(item); // Adds one more quantity of the item
                          }}
                          aria-label="Increase item quantity by 1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Display total calculations (subtotal, tax, grand total) */}
              <div className="total">
                <div className="total-primary">
                  {/* Subtotal calculation */}
                  <div className="subtotal-container">
                    <p className="subtotal">Cart Subtotal</p>
                    <span className="subtotal-number">{getCartSubTotal()}</span>
                  </div>
                </div>

                <div className="total-secondary">
                  {/* Tax total calculation */}
                  <div className="tax-container">
                    <p className="tax">Tax Total</p>
                    <span className="tax-number">{getTaxTotal()}</span>
                  </div>
                </div>

                <div className="total-tertiary">
                  {/* Grand total calculation */}
                  <div className="grand-total-container">
                    <p className="grand-total">Grand Total</p>
                    <span className="grand-total-number">
                      {getGrandTotal()}
                    </span>
                  </div>
                </div>

                {/* Button to proceed to checkout */}
                <div className="total-btn">
                  <Link to="/checkout">
                    <button
                      className="checkout-btn"
                      aria-label="Proceed to checkout"
                    >
                      Go To Checkout ({cartItems.length})
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            // If the cart is empty, show an empty cart message
            <div className="empty-cart-content">
              <p className="empty-cart">
                Ready to go! Add items to get started.
              </p>
              {/* Link to menu page */}
              <Link to="/menu">
                <button className="go-to-menu-btn" aria-label="Proceed to menu">
                  Order Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
