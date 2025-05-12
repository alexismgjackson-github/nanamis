import { useContext } from "react"; // Importing useContext hook to access the ScrollContext
import { ScrollContext } from "../Context/scroll"; // Importing the ScrollContext
import { useSearchParams } from "react-router-dom"; // Importing useSearchParams to work with query parameters in the URL
import data from "../src/menu.js"; // Importing the menu data
import MenuItem from "./MenuItem"; // Importing the MenuItem component to render each item in the menu
import "./Menu.css"; // Importing CSS styles for the Menu component

// The Menu component renders the menu items based on URL search parameters
export default function Menu() {
  // Using useSearchParams hook to read and update query parameters in the URL
  const [searchParams, setSearchParams] = useSearchParams();

  // Retrieving the value of the 'type' query parameter from the URL
  const typeFilter = searchParams.get("type");

  // Filtering the menu data based on the 'type' query parameter, if provided
  const displayedMenuItems = typeFilter
    ? data.filter((item) => item.type === typeFilter) // Only show items that match the filter
    : data; // If no filter is set, display all items

  // Mapping the filtered data to MenuItem components
  const menuElements = displayedMenuItems.map((item) => {
    return <MenuItem key={item.id} {...item} />;
  });

  // Accessing the scrollToTop function from the ScrollContext to scroll the page to the top
  const { scrollToTop } = useContext(ScrollContext);

  // Calling scrollToTop to ensure the page is scrolled to the top when the component renders
  scrollToTop();

  return (
    <>
      {/* Main container for the Menu page */}
      <div className="menu-container">
        <h1 className="menu-heading">Today's Menu</h1>

        {/* Filter buttons to allow users to filter the menu by type */}
        <div className="filter-btns">
          {/* Button to reset filter and show all items */}
          <button
            onClick={() => setSearchParams({})} // Reset the query parameter
            className={`filter-btn all ${typeFilter === "" ? "selected" : ""}`}
            aria-label="View all menu items"
          >
            All
          </button>

          {/* Button to filter by bread */}
          <button
            onClick={() => setSearchParams({ type: "bread" })} // Set the query parameter to 'bread'
            className={`filter-btn bread ${
              typeFilter === "bread" ? "selected" : ""
            }`}
            aria-label="View all bread items"
          >
            Bread
          </button>

          {/* Button to filter by pastry */}
          <button
            onClick={() => setSearchParams({ type: "pastry" })} // Set the query parameter to 'pastry'
            className={`filter-btn pastry ${
              typeFilter === "pastry" ? "selected" : ""
            }`}
            aria-label="View all pastry items"
          >
            Pastry
          </button>
        </div>

        {/* Displaying the number of items that match the current filter */}
        <div className="menu-items-count-container">
          <p className="menu-items-count">
            {displayedMenuItems.length} items found
          </p>
        </div>

        {/* Render the filtered menu items */}
        <div className="menu-items">{menuElements}</div>

        {/* Disclaimer section */}
        <div className="disclaimer-container">
          <p className="menu-disclaimer">
            ***Please be aware that our food may contain or come into contact
            with common allergens, such as peanuts, tree nuts, soy, dairy, eggs,
            sesame and wheat.
          </p>
        </div>
      </div>
    </>
  );
}
