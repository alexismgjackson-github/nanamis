import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formMessage, setFormMessage] = useState("");
  const [firstNameMessage, setFirstNameMessage] = useState("");
  const [lastNameMessage, setLastNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [messageMessage, setMessageMessage] = useState("");
  const [isValid, setIsValid] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  /* function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  } */

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.firstName.length === 0) {
      console.log("First name is invalid");
      setFirstNameMessage("Error: First name is required");
      setIsValid(false);
    } else {
      console.log("First name is valid");
      setFirstNameMessage("First name successfully submitted!");
      formData.firstName = "";
      setIsValid(true);
    }

    if (formData.lastName.length === 0) {
      console.log("Last name is invalid");
      setLastNameMessage("Error: Last name is required");
      setIsValid(false);
    } else {
      console.log("Second name is valid");
      setLastNameMessage("Last successfully submitted!");
      formData.lastName = "";
      setIsValid(true);
    }

    if (formData.email.length === 0) {
      console.log("Email is invalid");
      setEmailMessage("Error: Valid email is required");
      setIsValid(false);
    } else {
      console.log("Email is valid");
      setEmailMessage("Email successfully submitted!");
      formData.email = "";
      setIsValid(true);
    }

    if (formData.message.length === 0) {
      console.log("Message is invalid");
      setMessageMessage("Error: Message is required");
      setIsValid(false);
    } else {
      console.log("Message is valid");
      setMessageMessage("Message successfully submitted!");
      formData.message = "";
      setIsValid(true);
    }
  }

  // console.log(formData);

  return (
    <>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
          <div className="phone-and-email-container">
            <ul className="phone-and-email">
              <li>Telephone: (503) 703-1990</li>
              <li>Email: hello@nanamisbakery.com</li>
            </ul>
          </div>
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {formMessage && (
                <span
                  className={`contact-message ${
                    isValid == true ? "contact-success" : "contact-error"
                  }`}
                >
                  {formMessage}
                </span>
              )}
              <label htmlFor="">First Name (required)</label>
              {firstNameMessage && (
                <span
                  className={`contact-message ${
                    isValid == true ? "contact-success" : "contact-error"
                  }`}
                >
                  {firstNameMessage}
                </span>
              )}
              <input
                type="text"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                className="contact-form-input"
              />

              <label htmlFor="">Last Name (required)</label>
              {lastNameMessage && (
                <span
                  className={`contact-message ${
                    isValid == true ? "contact-success" : "contact-error"
                  }`}
                >
                  {lastNameMessage}
                </span>
              )}
              <input
                type="text"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                className="contact-form-input"
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
                onChange={handleChange}
                name="email"
                value={formData.email}
                className="contact-form-input"
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
                cols="30"
                rows="10"
                onChange={handleChange}
                name="message"
                value={formData.message}
              />
              <button className="contact-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
