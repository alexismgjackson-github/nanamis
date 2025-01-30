import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./OrderComplete.css";

export default function OrderComplete() {
  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="order-complete-container">
        <p className="order-complete-text">
          Thank you for your purchase! Your support of small businesses (ours
          especially) is much appreciated.
        </p>
        <div className="order-complete-img-container">
          <img
            className="order-complete-img"
            src="assets/images/order-complete-img.jpg"
            alt="Hands kneading dough on a stainless steel surface"
          />
        </div>
      </div>
    </>
  );
}
