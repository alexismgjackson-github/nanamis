import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <section className="hero">
          <img
            className="hero-img"
            src="assets/images/hero-img.jpg"
            alt="Stacked Sliced baguette"
          />
        </section>
        <section className="our-story">
          <h1>Our Story</h1>
          <p>
            At Nanami's, our baked goods are mixed in small batches, shaped by
            hand, and baked daily. It’s a process that requires time, but the
            result is well worth the wait. Our menu changes as we go, evolving
            with the seasons. We work directly with small, regional mills and
            farmers whenever possible. Our concept is simple, but far from the
            ordinary: only fresh, natural ingredients are used to make our
            artisanal bread and pastries.
          </p>
        </section>
        <section className="gallery">
          <div className="gallery-container">
            <img
              src="assets/images/grid-img-1.jpg"
              alt="Sourdough loaf on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-2.jpg"
              alt="Assorted bagels on parchment paper"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-3.jpg"
              alt="Raw Cinnamon rolls on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-4.jpg"
              alt="Sourdough loaf on crumpled paper"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-5.jpg"
              alt="Multiple Pita bread puffed up"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-6.jpg"
              alt="Sliced Hokkaido milk loaf on a white plate and cloth"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-7.jpg"
              alt="Sliced Ciabatta loaves on white cloth and wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-8.jpg"
              alt="Sesame Challah loaf on black surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-9.jpg"
              alt="Sliced Multi-Grain loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-10.jpg"
              alt="Sourdough loaf on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-11.jpg"
              alt="Hands kneading dough on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-12.jpg"
              alt="Croissants in an oven"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-13.jpg"
              alt="Baguettes in a paper bag"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-14.jpg"
              alt="Sliced Multi-Grain loaf on a black cloth"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-15.jpg"
              alt="Sourdough loaf on a white cloth"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-16.jpg"
              alt="Pumperknickel loaf on a black surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-17.jpg"
              alt="Sliced Hokkaido milk loaf on a wooden board"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-18.jpg"
              alt="Hand sprinkling flour on dough on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-19.jpg"
              alt="Soft Pretzels and silver tongs"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-20.jpg"
              alt="Croissant on a white plate on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-21.jpg"
              alt="Chocolate Babka wreath on a white plate on black surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-22.jpg"
              alt="Cinnamon roll on wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-23.jpg"
              alt="Multi-Grain sourdough loaf on a wooden surface"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-24.jpg"
              alt="Hand mixing dry flour"
              loading="lazy"
            />
          </div>
        </section>
        <section className="location-and-hours">
          <h1>Location & Hours</h1>
          <ul className="location-and-hours-details">
            <li>73 Black Flash Drive</li>
            <li>Clearwater Beach, FL 33767</li>
            <li>Open Daily: 7:00am - 3:00pm</li>
          </ul>
        </section>
      </div>
    </>
  );
}
