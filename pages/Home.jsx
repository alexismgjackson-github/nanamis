import "./Home.css"; // Importing CSS styles for the Home component
import { useContext } from "react"; // Importing useContext hook to access the ScrollContext
import { ScrollContext } from "../Context/scroll"; // Importing the ScrollContext

// The Home component renders the main page content
export default function Home() {
  // Accessing the scrollToTop function from the ScrollContext
  const { scrollToTop } = useContext(ScrollContext);

  // Calling the scrollToTop function to scroll the window to the top when the component renders
  scrollToTop();

  return (
    <>
      {/* Main container for the Home page */}
      <div className="home-container">
        {/* Hero section with an image */}
        <section className="hero">
          <img
            className="hero-img" // Applying styles to the hero image
            src="assets/images/unsplash22.jpg" // Image source
            alt="Sourdough rye loaf in a cloth held by a person wearing an apron" // Alt text for accessibility
          />
        </section>

        {/* Our Story section with heading and text */}
        <section className="our-story">
          <h1>Our Story</h1>
          <p>
            At Nanami's, our baked goods are mixed in small batches, shaped by
            hand, and baked daily. Our menu changes as we go, evolving with the
            seasons. We work directly with small, regional mills and farmers
            whenever possible. Our concept is simple: only fresh, natural
            ingredients are used to make our artisanal bread and pastries.
          </p>
        </section>

        {/* Gallery section with images of baked goods */}
        <section className="gallery">
          <div className="gallery-container">
            {/* Each image is loaded lazily for performance improvement */}
            <img
              src="assets/images/unsplash2.jpg"
              alt="Sesame challah loaf on a black surface"
              loading="lazy" // Lazy loading the image to improve page load performance
            />
            <img
              src="assets/images/unsplash3.jpg"
              alt="Multi-grain sliced loaf on a black surface"
              loading="lazy"
            />
            <img
              src="assets/images/unsplash5.jpg"
              alt="A person's hand and dough on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/unsplash7.jpg"
              alt="Two croissants on a paper surface"
              loading="lazy"
            />
            <img
              src="assets/images/unsplash8.jpg"
              alt="Raw cinnamon rolls on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/unsplash12.jpg"
              alt="Chocolate babka on a white plate"
              loading="lazy"
            />
            <img
              src="assets/images/unsplash14.jpg"
              alt="A person's kneading dough on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/unsplash15.jpg"
              alt="Ciabatta loaves on a white cloth"
              loading="lazy"
            />
            <img
              src="assets/images/unsplash16.jpg"
              alt="Multi-grain sliced loaf"
              loading="lazy"
            />
            <img
              src="assets/images/unsplash1.jpg"
              alt="Slice rye bread on a white surface"
              loading="lazy"
            />
            <img
              src="assets/images/unsplash11.jpg"
              alt="Cardamon buns on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/unsplash23.jpg"
              alt="Pumpkerknickel sourdough loaves on a black surface"
              loading="lazy"
            />
          </div>
        </section>

        {/* Location and Hours section */}
        <section className="location-and-hours">
          <h1>Location & Hours</h1>
          <ul className="location-and-hours-details">
            <li>73 Black Flash Drive</li> {/* Location address */}
            <li>Clearwater Beach, FL 33767</li>{" "}
            {/* Location city and zip code */}
            <li>Open Daily: 7:00am - 2:00pm</li> {/* Operating hours */}
          </ul>
        </section>
      </div>
    </>
  );
}
