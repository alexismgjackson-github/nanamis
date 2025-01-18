import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cart";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, getCartTotal } =
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
                      <img src={item.url} className="cart-item-img" />
                      <button
                        className="remove-item-btn"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        <img
                          src="assets/icons/trash.svg"
                          alt="Trash icon"
                          aria-label="Delete item from cart"
                        />
                      </button>
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
            <p className="empty-cart">Ready to go! Add items to get started.</p>
          )}
        </div>
      </div>
    </>
  );
}
