import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/cart";
import "./MenuItem.css";

export default function MenuItem(item) {
  const { addToCart } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <div className="menu-item" key={item.id} onClick={handleClick} {...item}>
        <div className="menu-item-header">
          <p className="menu-item-name">{item.name}</p>
          <span className="menu-item-price">${item.price}</span>
        </div>
      </div>

      <div className={`menu-item-modal-container ${isOpen ? "show" : "hide"}`}>
        <button className="close-menu-item-modal-btn" onClick={handleClick}>
          <img
            src="assets/icons/close-modal.svg"
            alt="Close menu item modal icon"
            aria-label="Close menu item modal"
          />
        </button>
        <div className="menu-item-modal-content">
          <div className="menu-item-modal">
            <div className="menu-item-modal-header">
              <h1 className="menu-item-modal-heading">{item.name}</h1>
              <span className="menu-item-modal-price">${item.price}</span>
              <img src={item.url} className="menu-item-modal-img" />
              <p className="menu-item-modal-flavor">
                Today's flavor: {item.flavor}
              </p>
              <p className="menu-item-modal-description">
                Description: {item.description}
              </p>
              <p className="menu-item-ingredients">
                Ingredients: {item.ingredients}
              </p>
              <p className="menu-item-modal-ideas">Suggestions: {item.ideas}</p>
            </div>

            <div className="menu-item-modal-btn">
              <button
                className="add-to-cart-btn"
                aria-label="Add item to cart"
                onClick={() => {
                  addToCart(item);
                  handleClick();
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
