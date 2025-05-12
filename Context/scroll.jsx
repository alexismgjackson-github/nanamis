import { createContext, useEffect } from "react";

// Creating a context for scroll functionality
export const ScrollContext = createContext();

// ScrollProvider component which provides scroll-related functionalities to children components
export const ScrollProvider = ({ children }) => {
  // Function to scroll the window to the top with a smooth animation
  const scrollToTop = () => {
    useEffect(() => {
      // Scrolls to the top-left of the page smoothly when the component mounts
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, []); // Empty dependency array ensures this effect runs only once (on mount)
  };

  return (
    // Providing the scrollToTop function to the component tree via context
    <ScrollContext.Provider
      value={{
        scrollToTop,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
