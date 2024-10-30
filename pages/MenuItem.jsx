import { useState, useEffect } from "react";
import MenuItemDetails from "./MenuItemDetails";
import "./MenuItem.css";

export default function MenuItem(item) {
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
        <MenuItemDetails {...item} />
      </div>
    </>
  );
}
