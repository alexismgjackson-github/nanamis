import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // the initial state of the cart items will be an empty array - if items are not in browser
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  // if item is already in cart then increase quantity of item in the cart but
  // if item is not in cart then add the item to cart

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

  // if item is already in cart...
  // if the quantity of the item is equal to 1 then remove the item from cart but
  // if the quantity of the item is greater than 1 then decrease the quantity of the item in cart

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

  // set the cart items to an empty array

  const clearCart = () => {
    setCartItems([]);
  };

  // calculate the total price of each item in the cart

  const getCartItemTotal = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      return formatUSD(isItemInCart.price * isItemInCart.quantity);
    }
  };

  // calculate the subtotal price of the items in the cart

  const getCartSubTotal = () => {
    return formatUSD(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  };

  // calculate the total tax price of the items in the cart

  const getTaxTotal = () => {
    const cartSubTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    return formatUSD(cartSubTotal * 0.09);
  };

  // calculate the grand total price of the items in the cart, including tax

  const getGrandTotal = () => {
    const cartSubTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const tax = cartSubTotal * 0.09;

    return formatUSD(cartSubTotal + tax);
  };

  // format item price to USD

  function formatUSD(num) {
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  // localStorage handling (initialization)
  // whenever cartItems is updated, save the changes to localStorage (if the cart is not empty)

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]); // run the effect only when the cartItems state changes

  // localStorage handling (persistence)
  // when the component first appears on the page, attempt to load the cartItems from localStorage

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); // will run only once, after the initial render of the component

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
    </CartContext.Provider>
  );
};
