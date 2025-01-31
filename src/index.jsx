import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { CartProvider } from "../Context/cart";
import { ScrollProvider } from "../Context/scroll";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Menu from "../pages/Menu";
import OrderComplete from "../pages/OrderComplete";
import "../index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/ordercomplete" element={<OrderComplete />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <CartProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </CartProvider>
  </StrictMode>
);
