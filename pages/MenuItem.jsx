import { useState, useEffect, useContext } from "react"; // Importing necessary hooks (useState, useEffect) and useContext for accessing the CartContext
import { CartContext } from "../Context/cart"; // Importing the CartContext to manage adding items to the cart
import "./MenuItem.css"; // Importing the CSS file for MenuItem styles

// MenuItem component renders a single menu item and a modal with more details
export default function MenuItem(item) {
  // Accessing addToCart function from CartContext to add the item to the cart
  const { addToCart } = useContext(CartContext);

  // State to manage whether the modal for the menu item is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open or close the modal when the menu item is clicked
  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  // useEffect hook to control body scroll when modal is open
  // Prevents scrolling on the page when the modal is open, otherwise restores scrolling
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]); // Re-run this effect whenever isOpen state changes

  return (
    <>
      {/* Menu item display */}
      <div className="menu-item" key={item.id} onClick={handleClick} {...item}>
        {/* Header for the menu item that includes an image */}
        <div className="menu-item-header">
          <img src={item.url} className="menu-item-modal-img" alt={item.name} />
        </div>
        {/* Body displaying name and price of the menu item */}
        <div className="menu-item-body">
          <p className="menu-item-name">{item.name}</p>
          <span className="menu-item-price">${item.price}</span>
        </div>
      </div>

      {/* Modal for displaying detailed information about the menu item */}
      <div className={`menu-item-modal-container ${isOpen ? "show" : "hide"}`}>
        {/* Button to close the modal */}
        <button className="close-menu-item-modal-btn" onClick={handleClick}>
          <img
            src="assets/icons/close-modal.svg" // Close icon image
            alt="Close menu item modal icon"
            aria-label="Close menu item modal"
          />
        </button>
        {/* Modal content for displaying detailed information */}
        <div className="menu-item-modal-content">
          <div className="menu-item-modal">
            <div className="menu-item-modal-header">
              {/* Display menu item name and price in the modal */}
              <h1 className="menu-item-modal-heading">{item.name}</h1>
              <span className="menu-item-modal-price">${item.price}</span>
              {/* Display image, flavor, description, ingredients, and suggestions */}
              <img
                src={item.url}
                className="menu-item-modal-img"
                alt={item.name}
              />
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
            {/* Add to Cart button inside the modal */}
            <div className="menu-item-modal-btn">
              <button
                className="add-to-cart-btn"
                aria-label="Add menu item to cart"
                onClick={() => {
                  addToCart(item); // Add item to the cart
                  handleClick(); // Close the modal after adding the item to the cart
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
