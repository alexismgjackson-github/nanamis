import { useContext } from "react";
import { CartContext } from "../Context/cart";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    <>
      <div className="cart-container">
        <h1>Your Cart</h1>
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
                        {item.quantity}
                      </span>
                      <p className="cart-item-name">{item.name}</p>
                      <span className="cart-item-price">${item.price}</span>
                    </div>
                    <div className="cart-item-secondary">
                      <p className="cart-item-flavor">{item.flavor}</p>
                      <button
                        className="remove-item-btn"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total">
                <div className="total-primary">
                  <div className="subtotal-container">
                    <p className="subtotal">Item subtotal</p>
                    <span className="subtotal-number">{getCartTotal()}</span>
                  </div>
                  <div className="tax-container">
                    <p className="tax">Tax</p>
                    <span className="tax-number">$0.00</span>
                  </div>
                </div>
                <div className="total-secondary">
                  <button className="checkout-btn">
                    Checkout ({cartItems.length})
                  </button>
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
