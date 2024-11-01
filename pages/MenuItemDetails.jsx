// import { data } from "@remix-run/router";
import { useState } from "react";
import "./MenuItemDetails.css";

export default function MenuItemDetails({ ...item }) {
  const [cartItems, setCartItems] = useState([]);

  const [dataObj, setDataObj] = useState({
    id: item.id,
    quantity: 0,
    name: item.name,
    price: item.price,
    description: item.description,
    ideas: item.ideas,
  });

  const itemPrice = item.price * dataObj.quantity;
  const totalPrice = formatUSD(itemPrice);

  function incrementByOne() {
    setDataObj((prevDataObj) => {
      return {
        ...prevDataObj,
        quantity: prevDataObj.quantity + 1,
        price: prevDataObj.price * item.quantity,
      };
    });
    console.log("Increment button clicked");
  }

  function decrementByOne() {
    setDataObj((prevDataObj) => {
      return {
        ...prevDataObj,
        quantity: prevDataObj.quantity - 1,
        price: prevDataObj.price * item.quantity,
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

    const newCartItem = {
      id: dataObj.id,
      quantity: dataObj.quantity,
      name: dataObj.name,
      price: totalPrice,
      description: dataObj.description,
      ideas: dataObj.ideas,
    };

    console.log(newCartItem);

    setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
    console.log(cartItems);
  }

  /*
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setDataObj((prevDataObj) => {
      return {
        ...prevDataObj,
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
        <p className="menu-item-modal-flavor">Today's flavor: {item.flavor}</p>
      </div>
      <div className="menu-item-modal-content">
        <form className="menu-item-modal-form">
          <div className="modal-quantity-container">
            <button
              className="menu-item-modal-decrement-btn"
              type="button"
              aria-label="Decrease quantity"
              onClick={decrementByOne}
              disabled={dataObj.quantity === 0 ? true : false}
            >
              <img
                src="assets/icons/decrement.svg"
                alt="Decrease quantity"
                aria-label="Decrease quantity"
              />
            </button>
            <span className="menu-item-modal-quantity">{dataObj.quantity}</span>
            <button
              className="menu-item-modal-increment-btn"
              type="button"
              aria-label="Increase quantity"
              onClick={incrementByOne}
              disabled={dataObj.quantity === 10 ? true : false}
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
              disabled={dataObj.quantity === 0 ? true : false}
            >
              Add To Cart - {totalPrice}{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
