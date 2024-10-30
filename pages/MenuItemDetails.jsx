import { useState } from "react";
import "./MenuItemDetails.css";

export default function MenuItemDetails({ ...item }) {
  const [formData, setFormData] = useState({
    id: item.id,
    quantity: 0,
    name: item.name,
    price: item.price,
    description: item.description,
    ideas: item.ideas,
  });

  const itemPrice = item.price * formData.quantity;
  const totalPrice = formatUSD(itemPrice);

  function incrementByOne() {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        quantity: prevFormData.quantity + 1,
        price: prevFormData.price * item.quantity,
      };
    });
    console.log("Increment button clicked");
  }

  function decrementByOne() {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        quantity: prevFormData.quantity - 1,
        price: prevFormData.price * item.quantity,
      };
    });
    console.log("Decrement button clicked");
  }

  function formatUSD(num) {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  function addToCart(event) {
    event.preventDefault();
    console.log("Adding item to cart");
  }

  /*
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  */

  return (
    <div className="menu-item-modal">
      <div className="menu-item-modal-header">
        <h1 className="menu-item-modal-heading">{item.name}</h1>
        <span className="menu-item-modal-price">${item.price}</span>
        <p className="menu-item-modal-description">{item.description}</p>
        <p className="menu-item-modal-ideas">{item.ideas}</p>
      </div>
      <div className="menu-item-modal-content">
        <form className="menu-item-modal-form">
          <div className="modal-quantity-container">
            <button
              className="menu-item-modal-decrement-btn"
              type="button"
              aria-label="Decrease quantity"
              onClick={decrementByOne}
              disabled={formData.quantity === 0 ? true : false}
            >
              <img
                src="assets/icons/decrement.svg"
                alt="Decrease quantity"
                aria-label="Decrease quantity"
              />
            </button>
            <span className="menu-item-modal-quantity">
              {formData.quantity}
            </span>
            <button
              className="menu-item-modal-increment-btn"
              type="button"
              aria-label="Increase quantity"
              onClick={incrementByOne}
              disabled={formData.quantity === 10 ? true : false}
            >
              <img
                src="assets/icons/increment.svg"
                alt="Increase quantity"
                aria-label="Increase quantity"
              />
            </button>
          </div>
          <div className="menu-item-modal-btn">
            <button
              className="add-to-cart-btn"
              aria-label="Add item to cart"
              onClick={addToCart}
              disabled={formData.quantity === 0 ? true : false}
            >
              Add To Cart - {totalPrice}{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
