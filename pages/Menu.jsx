import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import { useSearchParams } from "react-router-dom";
import data from "../src/menu.js";
import MenuItem from "./MenuItem";
import "./Menu.css";

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams(); // reading and updating query parameters in the URL

  const typeFilter = searchParams.get("type"); // retrieves the value of the type query parameter from the URL

  // filters the data array based on the type query parameter and only displays matching items

  const displayedMenuItems = typeFilter
    ? data.filter((item) => item.type === typeFilter)
    : data;

  const menuElements = displayedMenuItems.map((item) => {
    return <MenuItem key={item.id} {...item} />;
  });

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="menu-container">
        <h1 className="menu-heading">Today's Menu</h1>
        <div className="filter-btns">
          <button
            onClick={() => setSearchParams({})}
            className="filter-btn all"
            aria-label="View all menu items"
          >
            All
          </button>
          <button
            onClick={() => setSearchParams({ type: "bread" })}
            className="filter-btn bread"
            aria-label="View all bread items"
          >
            Bread
          </button>
          <button
            onClick={() => setSearchParams({ type: "pastry" })}
            className="filter-btn pastry"
            aria-label="View all pastry items"
          >
            Pastry
          </button>
        </div>
        <div className="menu-items-count-container">
          <p className="menu-items-count">
            {displayedMenuItems.length} items found
          </p>
        </div>
        <div className="menu-items">{menuElements}</div>
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
