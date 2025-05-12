// Import React hooks and createContext to manage cart state globally
import { createContext, useState, useEffect } from "react";

// Create the Cart context
export const CartContext = createContext();

// CartProvider component to wrap around any component that needs access to the cart
export const CartProvider = ({ children }) => {
  // Initialize cartItems state from localStorage if it exists, otherwise use an empty array
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  // Add an item to the cart
  // - If the item already exists, increase its quantity
  // - If it's new, add it with quantity = 1
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Remove an item from the cart
  // - If quantity is 1, remove it entirely
  // - If quantity is > 1, decrease the quantity
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      if (isItemInCart.quantity === 1) {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      } else {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      }
    }
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total for a specific item in the cart
  const getCartItemTotal = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      return formatUSD(isItemInCart.price * isItemInCart.quantity);
    }
  };

  // Calculate subtotal for all items in the cart (before tax)
  const getCartSubTotal = () => {
    return formatUSD(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  };

  // Calculate total tax (9% assumed tax rate)
  const getTaxTotal = () => {
    const cartSubTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return formatUSD(cartSubTotal * 0.09);
  };

  // Calculate the grand total including tax
  const getGrandTotal = () => {
    const cartSubTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const tax = cartSubTotal * 0.09;

    return formatUSD(cartSubTotal + tax);
  };

  // Format a number as USD currency
  function formatUSD(num) {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  // Save cart to localStorage every time it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]); // Trigger this effect whenever cartItems changes

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); // Run once on mount

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartItemTotal,
        getCartSubTotal,
        getTaxTotal,
        getGrandTotal,
      }}
    >
      {children}{" "}
      {/* Render any child components that need access to the cart */}
    </CartContext.Provider>
  );
};
