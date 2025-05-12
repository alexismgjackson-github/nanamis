// Import necessary hooks and styles
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For navigation and to trigger effect cleanup
import "./Footer.css"; // Footer styles

export default function Footer() {
  // State to manage email input field
  const [formData, setFormData] = useState({
    email: "",
  });

  // Message displayed after form submission
  const [emailMessage, setEmailMessage] = useState("");

  // Boolean to track if the submitted email is valid
  const [isValid, setIsValid] = useState(null);

  const navigate = useNavigate();

  // Updates form state on input change
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // Handles form submission
  function handleSubmit(event) {
    event.preventDefault();

    if (formData.email.length > 0) {
      console.log("Email is valid");
      setEmailMessage("Thank you for subscribing!"); // Show success message
      setIsValid(true); // Mark as valid
      setFormData({ email: "" }); // ✅ Properly reset the email input
    }
  }

  // Clear email message on component unmount or navigation change
  useEffect(() => {
    return () => {
      setEmailMessage("");
    };
  }, [navigate]);

  return (
    <footer>
      <div className="footer-links-and-form">
        {/* Social links section */}
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

        {/* Newsletter form section */}
        <div className="footer-secondary">
          <h2>Newsletter</h2>
          <div className="newsletter-container">
            <p className="newsletter-text">
              Be the first to know about all things Nanami's
            </p>
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                className="newsletter-input"
                type={"email"}
                placeholder="kentonanami@mail.com"
                name="email"
                onChange={handleChange}
                value={formData.email}
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" // Simple email regex pattern
                required
              />
              {/* Show message only if one exists */}
              {emailMessage && (
                <span
                  className={`newsletter-message ${
                    isValid === true ? "footer-success" : ""
                  }`}
                >
                  {emailMessage}
                </span>
              )}
              <button
                className="newsletter-btn"
                aria-label="Sign up for newsletter"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
