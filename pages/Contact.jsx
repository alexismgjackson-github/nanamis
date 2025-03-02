import { useState, useContext } from "react";
import "./Contact.css";
import { ScrollContext } from "../Context/scroll";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [fullNameMessage, setFullNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [messageMessage, setMessageMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  // update the state of form whenever a user changes a field

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  // if the field is valid (not empty), update user with a UI message
  // set a general validity flag and clear the corresponding form field

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.fullName.length > 0) {
      console.log("First name is valid");
      setFullNameMessage("Full name successfully submitted!");
      setIsValid(true);
      formData.fullName = "";
    }

    if (formData.email.length > 0) {
      console.log("Email is valid");
      setEmailMessage("Email successfully submitted!");
      setIsValid(true);
      formData.email = "";
    }

    if (formData.message.length > 0) {
      console.log("Message is valid");
      setMessageMessage("Message successfully submitted!");
      setIsValid(true);
      formData.message = "";
    }
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="phone-and-email-container">
            <ul className="phone-and-email">
              <li>Telephone: (407) 703-1990</li>
              <li>Email: hello@nanamisbakery.com</li>
            </ul>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
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
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                spellCheck="false"
                required
              />
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
              <button className="contact-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
