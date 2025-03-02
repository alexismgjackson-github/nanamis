import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [emailMessage, setEmailMessage] = useState("");
  const [isValid, setIsValid] = useState(null);
  const navigate = useNavigate();

  // update the state of form whenever a user changes a field

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // if the field is valid (not empty), update user with a UI message
  // sets a general validity flag and clear the corresponding form field

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.email.length > 0) {
      console.log("Email is valid");
      setEmailMessage("Thank you for subscribing!");
      setIsValid(true);
      formData.email = "";
    }
  }

  // console.log(formData);

  useEffect(() => {
    return () => {
      setEmailMessage("");
    };
  }, [navigate]);

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
              <input
                className="newsletter-input"
                type={"email"}
                placeholder="kentonanami@mail.com"
                name="email"
                onChange={handleChange}
                value={formData.email}
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                required
              />
              {emailMessage && (
                <span
                  className={`newsletter-message ${
                    isValid == true ? "footer-success" : ""
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
