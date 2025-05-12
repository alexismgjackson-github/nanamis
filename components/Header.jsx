// Import necessary hooks and components
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/cart"; // Cart context for accessing cart state
import { NavLink } from "react-router-dom"; // Navigation link component from React Router
import "./Header.css"; // CSS for styling the Header component

// Functional component for the site header
export default function Header() {
  const { cartItems } = useContext(CartContext); // Access cart items from context

  const [isOpen, setIsOpen] = useState(false); // State to track hamburger menu open/close

  // Toggle the hamburger menu open state
  const handleClick = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  // Style to apply to active navigation links
  const activeStyle = {
    color: "#FFC40C",
    fontWeight: 700,
  };

  // Lock or unlock body scroll depending on hamburger menu state
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header>
      {/* Logo navigates to homepage */}
      <NavLink className="logo" to="/">
        Nanami's
      </NavLink>

      <nav className="header-nav">
        {/* Navigation for desktop view */}
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
            Cart ({cartItems.length}) {/* Shows number of items in cart */}
          </NavLink>
        </div>

        {/* Navigation for mobile and tablet view */}
        <div className="header-mobile-and-tablet-view">
          {/* Cart icon for smaller screens */}
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
            {cartItems.length} {/* Show cart count beside the icon */}
          </div>
          {/* Hamburger menu for navigation on mobile */}
          <div className="hamburger-menu">
            <button className="hamburger-btn" onClick={handleClick}>
              <img
                src="assets/icons/hamburger.svg"
                alt="Hamburger menu icon"
                aria-label="Open hamburger menu"
              />
            </button>

            {/* Conditional overlay for hamburger menu */}
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
                  onClick={handleClick} // Close menu on click
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
