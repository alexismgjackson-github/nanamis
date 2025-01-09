import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <section className="hero">
          <img
            className="hero-img"
            src="assets/images/unsplash22.jpg"
            alt="Stacked sliced baguette"
          />
        </section>
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
        <section className="gallery">
          <div className="gallery-container">
            <img src="assets/images/unsplash2.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash3.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash5.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash7.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash8.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash12.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash14.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash15.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash16.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash17.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash18.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash1.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash19.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash20.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash21.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash11.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash25.jpg" alt="" loading="lazy" />
            <img src="assets/images/unsplash23.jpg" alt="" loading="lazy" />
          </div>
        </section>
        <section className="location-and-hours">
          <h1>Location & Hours</h1>
          <ul className="location-and-hours-details">
            <li>73 Black Flash Drive</li>
            <li>Clearwater Beach, FL 33767</li>
            <li>Open Daily: 7:00am - 2:00pm</li>
          </ul>
        </section>
      </div>
    </>
  );
}
