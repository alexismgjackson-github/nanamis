import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cart";
import { ScrollContext } from "../Context/scroll";
import "./Cart.css";

export default function Cart() {
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

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="cart-container">
        <h1 className="cart-heading">Your Cart</h1>
        <div className="cart-container-content">
          {cartItems.length > 0 ? (
            <div className="cart">
              <div className="clear-cart">
                <button
                  className="clear-cart-btn"
                  onClick={() => {
                    clearCart();
                  }}
                  aria-label="Remove all items from cart"
                >
                  Clear Cart
                </button>
              </div>
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
                    <div className="cart-item-secondary">
                      <img src={item.url} className="cart-item-img" />
                      <div className="quantity-btns">
                        <button
                          className="decrement-btn"
                          onClick={() => {
                            removeFromCart(item);
                          }}
                          aria-label="Decrease item quantity by 1"
                        >
                          -
                        </button>
                        <button
                          className="increment-btn"
                          onClick={() => {
                            addToCart(item);
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
              <div className="total">
                <div className="total-primary">
                  <div className="subtotal-container">
                    <p className="subtotal">Cart Subtotal</p>
                    <span className="subtotal-number">{getCartSubTotal()}</span>
                  </div>
                </div>
                <div className="total-secondary">
                  <div className="tax-container">
                    <p className="tax">Tax Total</p>
                    <span className="tax-number">{getTaxTotal()}</span>
                  </div>
                </div>
                <div className="total-tertiary">
                  <div className="grand-total-container">
                    <p className="grand-total">Grand Total</p>
                    <span className="grand-total-number">
                      {getGrandTotal()}
                    </span>
                  </div>
                </div>
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
            <div className="empty-cart-content">
              <p className="empty-cart">
                Ready to go! Add items to get started.
              </p>
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
