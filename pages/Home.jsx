import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <section className="hero">
          <img
            className="hero-img"
            src="assets/images/hero-img.jpg"
            alt="Sliced baguette"
          />
        </section>
        <section className="our-story">
          <h1>Our Story</h1>
          <p>
            Nanami's, dolor sit amet consectetur adipisicing elit. Delectus
            aliquid accusamus voluptatem sed ut architecto repudiandae
            asperiores quas, eum facere saepe perspiciatis praesentium
            molestiae, debitis consequatur. Fuga voluptatum rerum temporibus.
            Natus pariatur eaque reprehenderit deleniti aliquam debitis, dolorum
            culpa consectetur placeat cum aliquid itaque.
          </p>
        </section>
        <section className="gallery">
          <div className="gallery-container">
            <img
              src="assets/images/grid-img-1.jpg"
              alt="Sourdough loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-2.jpg"
              alt="Assorted bagels"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-3.jpg"
              alt="Cinnamon rolls"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-4.jpg"
              alt="Sourdough loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-5.jpg"
              alt="Pita bread"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-6.jpg"
              alt="Sliced Hokkaido loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-7.jpg"
              alt="Sliced Ciabatta loaves"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-8.jpg"
              alt="Challah loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-9.jpg"
              alt="Sliced multi-grain loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-10.jpg"
              alt="Sourdough loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-11.jpg"
              alt="Hands kneading dough"
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
              alt="Sliced multi-grain loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-15.jpg"
              alt="Sourdough loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-16.jpg"
              alt="Pumperknickel loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-17.jpg"
              alt="Sliced Hokkaido loaf"
              loading="lazy"
            />
            <img
              src="assets/images/grid-img-18.jpg"
              alt="Hand sprinkling flour on dough"
              loading="lazy"
            />
          </div>
        </section>
        <section className="location-and-hours">
          <h1>Location & Hours</h1>
          <ul className="location-and-hours-details">
            <div className="location">
              <li>73 Black Flash Drive</li>
              <li>Cannon Beach, OR 97110</li>
            </div>
            <div className="hours">
              <li>Weekdays: 7:00am - 5:00pm</li>
              <li>Weekends: 8:00am - 5:00pm</li>
            </div>
          </ul>
        </section>
      </div>
    </>
  );
}
