import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // the initial state of the cart items will be an empty array - if items are not in browser
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  // checking if item is already in cart
  // if item is already in cart then increase quantity of item in the cart
  // if item is not in cart then add to cart

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // checking if item is already in cart
  // if the quantity of the item is equal to 1 then remove the item from cart
  // if the quantity of the item is greater than 1 then decrease the quantity of the item in cart

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

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
  };

  // set the cart items to an empty array

  const clearCart = () => {
    setCartItems([]);
  };

  // calculate the total price of the items in the cart

  const getCartTotal = () => {
    return formatUSD(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  };

  // format item price to USD

  function formatUSD(num) {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  // persist the cart state in the browser

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // get the cart items from the browser.

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
