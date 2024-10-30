import { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [emailMessage, setEmailMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.email.length > 0 && emailIsValid(formData.email)) {
      console.log("Email is valid");
      setEmailMessage("Thank you for subscribing!");
      setIsValid(true);
      formData.email = "";
    } else {
      console.log("Email is invalid");
      setEmailMessage("Error: Please enter a valid email.");
      setIsValid(false);
    }
  }

  // console.log(formData);

  return (
    <footer>
      <div className="footer-links-and-form">
        <div className="footer-primary">
          <h2>Social</h2>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.instagram.com/?hl=en"
                target={"_blank"}
                className="footer-link"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/18thStpilsen/"
                target={"_blank"}
                className="footer-link"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://x.com/?lang=en"
                target={"_blank"}
                className="footer-link"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/"
                target={"_blank"}
                className="footer-link"
              >
                Spotify
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-secondary">
          <h2>Newsletter</h2>
          <div className="newsletter-container">
            <p className="newsletter-text">
              Be the first to know about all things Nanami's
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              {emailMessage && (
                <span
                  className={`newsletter-message ${
                    isValid == true ? "footer-success" : "footer-error"
                  }`}
                >
                  {emailMessage}
                </span>
              )}
              <input
                className="newsletter-input"
                type={"email"}
                placeholder="Type email here..."
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
              <button className="newsletter-btn">Sign Up</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2024 Nanami's Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
}
