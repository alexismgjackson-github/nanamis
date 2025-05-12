// Importing required modules and components
import { StrictMode } from "react"; // React strict mode helps highlight potential problems in an app
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Routing utilities from React Router
import { createRoot } from "react-dom/client"; // For rendering React app with React 18+
import { CartProvider } from "../Context/cart"; // Context provider for cart state
import { ScrollProvider } from "../Context/scroll"; // Context provider for scroll behavior

// Importing application pages
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Layout from "../components/Layout"; // Layout component that wraps around pages
import Menu from "../pages/Menu";
import OrderComplete from "../pages/OrderComplete";

// Main application component
function App() {
  return (
    <>
      <BrowserRouter>
        {" "}
        {/* Enables routing in the app */}
        <Routes>
          <Route element={<Layout />}>
            {" "}
            {/* Shared layout for nested routes */}
            <Route path="/" element={<Home />} /> {/* Route for Home page */}
            <Route path="/menu" element={<Menu />} />{" "}
            {/* Route for Menu page */}
            <Route path="/contact" element={<Contact />} />{" "}
            {/* Route for Contact page */}
            <Route path="/cart" element={<Cart />} />{" "}
            {/* Route for Cart page */}
            <Route path="/checkout" element={<Checkout />} />{" "}
            {/* Route for Checkout page */}
            <Route path="/ordercomplete" element={<OrderComplete />} />{" "}
            {/* Route for Order Complete page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Getting the root DOM element
const container = document.getElementById("root");
// Creating the root for rendering the app
const root = createRoot(container);

// Rendering the app with context providers and React strict mode
root.render(
  <StrictMode>
    {" "}
    {/* Helps identify potential issues in development */}
    <CartProvider>
      {" "}
      {/* Provides cart state to the app */}
      <ScrollProvider>
        {" "}
        {/* Provides scroll state or behavior */}
        <App /> {/* Main app component */}
      </ScrollProvider>
    </CartProvider>
  </StrictMode>
);
