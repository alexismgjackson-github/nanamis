import { useContext } from "react"; // Importing the useContext hook to access the ScrollContext
import { ScrollContext } from "../Context/scroll"; // Importing ScrollContext to control scroll behavior
import "./OrderComplete.css"; // Importing CSS styles for OrderComplete component

// OrderComplete component displays a thank you message and an image after an order is completed
export default function OrderComplete() {
  // Accessing scrollToTop function from ScrollContext to scroll the page to the top
  const { scrollToTop } = useContext(ScrollContext);

  // Calling scrollToTop to ensure the page scrolls to the top when the component renders
  scrollToTop();

  return (
    <>
      {/* Main container for the OrderComplete page */}
      <div className="order-complete-container">
        {/* Thank you message for the customer */}
        <p className="order-complete-text">
          Thank you for your purchase! Your support of small businesses (ours
          especially) is much appreciated.
        </p>

        {/* Image container to display the order complete image */}
        <div className="order-complete-img-container">
          <img
            className="order-complete-img"
            src="assets/images/order-complete-img.jpg" // Image showing hands kneading dough
            alt="Hands kneading dough on a stainless steel surface"
          />
        </div>
      </div>
    </>
  );
}
