import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/cart";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const { cartItems } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  const activeStyle = {
    color: "#FFC40C",
    fontWeight: 700,
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header>
      <NavLink className="logo" to="/">
        Nanami's
      </NavLink>
      <nav className="header-nav">
        <div className="header-desktop-view">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Menu
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className="cart-icon"
          >
            Cart ({cartItems.length})
          </NavLink>
        </div>

        <div className="header-mobile-and-tablet-view">
          <div className="mobile-and-tablet-cart-icon-container">
            <NavLink
              to="/cart"
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className="mobile-and-tablet-cart-icon"
            >
              <img
                className="cart-icon"
                src="assets/icons/cart.svg"
                alt="Shopping cart icon"
                aria-label="Go to shopping cart"
              />
            </NavLink>
            {cartItems.length}
          </div>
          <div className="hamburger-menu">
            <button className="hamburger-btn" onClick={handleClick}>
              <img
                src="assets/icons/hamburger.svg"
                alt="Hamburger menu icon"
                aria-label="Open hamburger menu"
              />
            </button>
            <div className={`hamburger-overlay ${isOpen ? "show" : "hide"} `}>
              <div className="hamburger-header">
                <button className="close-hamburger-btn" onClick={handleClick}>
                  <img
                    src="assets/icons/close-hamburger.svg"
                    alt="Close menu icon"
                    aria-label="Close hamburger menu"
                  />
                </button>
              </div>
              <div className="hamburger-content">
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  onClick={handleClick}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/menu"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  onClick={handleClick}
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  onClick={handleClick}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>{" "}
        </div>
      </nav>
    </header>
  );
}
