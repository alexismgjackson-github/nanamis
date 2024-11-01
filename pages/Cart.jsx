import "./Cart.css";

export default function Cart(props) {
  return (
    <>
      <div className="cart-container">
        <h1>Cart</h1>
        <div className="cart-container-content">
          <div className="cart">
            {/*<p className="empty-cart-content">
            Ready to go! Add items to get started.
          </p>*/}
            <div className="cart-item">
              <div className="cart-item-primary">
                <span className="cart-item-quantity">1</span>
                <p className="cart-item-name">Brioche Loaf</p>
                <span className="cart-item-price">$8.25</span>
              </div>
              <div className="cart-item-secondary">
                <button className="remove-item-btn">Remove</button>
              </div>
            </div>
          </div>
          <div className="total">
            <div className="total-primary">
              <div className="subtotal-container">
                <p className="subtotal">Item subtotal</p>
                <span className="subtotal-number">$8.25</span>
              </div>
              <div className="tax-container">
                <p className="tax">Tax</p>
                <span className="tax-number">$0.00</span>
              </div>
            </div>
            <div className="total-secondary">
              <button className="checkout-btn">Checkout (1)</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
