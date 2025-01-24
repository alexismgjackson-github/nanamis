import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cart";
import "./Cart.css";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

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
                >
                  Clear Cart
                </button>
              </div>
              <div className="full-cart">
                {cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-primary">
                      <span className="cart-item-quantity">
                        {item.quantity} QTY
                      </span>
                      <p className="cart-item-name">{item.name}</p>
                      <span className="cart-item-price">${item.price}</span>
                      <p className="cart-item-flavor">{item.flavor}</p>
                    </div>
                    <div className="cart-item-secondary">
                      <div className="quantity-btns">
                        <button
                          className="decrement-btn"
                          onClick={() => {
                            removeFromCart(item);
                          }}
                        >
                          -
                        </button>
                        <button
                          className="increment-btn"
                          onClick={() => {
                            addToCart(item);
                          }}
                        >
                          +
                        </button>
                      </div>
                      <img src={item.url} className="cart-item-img" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="total">
                <div className="total-primary">
                  <div className="subtotal-container">
                    <p className="subtotal">Cart Total</p>
                    <span className="subtotal-number">{getCartTotal()}</span>
                  </div>
                </div>
                <div className="total-secondary">
                  <Link to="/checkout">
                    <button className="checkout-btn">
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
                <button className="go-to-menu-btn">Order Now</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
