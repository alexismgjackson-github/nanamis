import { useState, useContext } from "react"; // Importing React hooks: useState for managing state, useContext for accessing the ScrollContext
import "./Contact.css"; // Importing CSS styles for the Contact component
import { ScrollContext } from "../Context/scroll"; // Importing ScrollContext to use the scroll functionality

// The Contact component handles the contact form submission and validation
export default function Contact() {
  // State to store form input values
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // State to store individual validation messages for each field
  const [fullNameMessage, setFullNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [messageMessage, setMessageMessage] = useState("");

  // State to manage overall validity of the form
  const [isValid, setIsValid] = useState(null);

  // Handles the change in form fields and updates state with the new value
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // Handles form submission, validates fields and updates UI with appropriate messages
  function handleSubmit(event) {
    event.preventDefault(); // Preventing default form submission behavior

    // Validating the full name field
    if (formData.fullName.length > 0) {
      console.log("First name is valid");
      setFullNameMessage("Full name successfully submitted!");
      setIsValid(true); // Set validity flag to true
      formData.fullName = ""; // Clear the field after successful submission
    }

    // Validating the email field
    if (formData.email.length > 0) {
      console.log("Email is valid");
      setEmailMessage("Email successfully submitted!");
      setIsValid(true); // Set validity flag to true
      formData.email = ""; // Clear the field after successful submission
    }

    // Validating the message field
    if (formData.message.length > 0) {
      console.log("Message is valid");
      setMessageMessage("Message successfully submitted!");
      setIsValid(true); // Set validity flag to true
      formData.message = ""; // Clear the field after successful submission
    }
  }

  // Accessing the scrollToTop function from ScrollContext to scroll the page to the top
  const { scrollToTop } = useContext(ScrollContext);

  // Call scrollToTop when the component mounts to ensure the page is scrolled to the top
  scrollToTop();

  return (
    <>
      {/* Contact form container */}
      <div className="contact-container">
        <h1>Contact Us</h1>

        {/* Contact information section */}
        <div className="contact-info">
          <div className="phone-and-email-container">
            <ul className="phone-and-email">
              <li>Telephone: (407) 703-1990</li>
              <li>Email: hello@nanamisbakery.com</li>
            </ul>
          </div>

          {/* Contact form section */}
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Full Name Input */}
              <label htmlFor="">Full Name (required)</label>
              {fullNameMessage && (
                <span
                  className={`contact-message ${
                    isValid == true ? "contact-success" : "contact-error"
                  }`}
                >
                  {fullNameMessage}
                </span>
              )}
              <input
                type="text"
                placeholder="Kento Nanami"
                onChange={handleChange}
                name="fullName"
                value={formData.fullName}
                className="contact-form-input"
                spellCheck="false"
                required
              />

              {/* Email Input */}
              <label htmlFor="">Email (required)</label>
              {emailMessage && (
                <span
                  className={`contact-message ${
                    isValid == true ? "contact-success" : "contact-error"
                  }`}
                >
                  {emailMessage}
                </span>
              )}
              <input
                type="text"
                placeholder="kentonanami@mail.com"
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="contact-form-input"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" // Email validation pattern
                spellCheck="false"
                required
              />

              {/* Message Textarea */}
              <label htmlFor="">Message (required)</label>
              {messageMessage && (
                <span
                  className={`contact-message ${
                    isValid == true ? "contact-success" : "contact-error"
                  }`}
                >
                  {messageMessage}
                </span>
              )}
              <textarea
                className="contact-form-textarea"
                placeholder="Hello there!"
                cols="30"
                rows="10"
                onChange={handleChange}
                name="message"
                value={formData.message}
                required
              />

              {/* Submit Button */}
              <button className="contact-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
