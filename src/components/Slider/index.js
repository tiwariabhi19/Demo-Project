import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import "./index.css";
const Slider = () => {
  const [slide, setSlide] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Function to handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please verify the captcha first.");
      return;
    }

    if (formData.name === "" || formData.email === "") {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Form submitted. Name: ${formData.name}, Email: ${formData.email}`);
  };

  // Function to verify captcha
  const onCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const toggleSlide = () => {
    setSlide(!slide);
  };

  return (
    <div className="slider-section">
      <header className="header">
        <h1>Slider Form</h1>
      </header>

      <div className="slider-toggle-button" onClick={toggleSlide}>
        <div className={slide ? "slider-arrow rotate" : "slider-arrow"}>⇧</div>
        <span>{slide ? "Close Form" : "Open Form"}</span>
      </div>

      <div className={`slider-form ${slide ? "slide-open" : "slide-closed"}`}>
        <form className="form-content" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Full Name:
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label htmlFor="email">
            Email Address:
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>

          {/* Add Google reCAPTCHA widget */}
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY} // Replace with your Google reCAPTCHA site key
            onChange={onCaptchaChange}
          />

          <button type="submit" disabled={!captchaVerified}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Slider;
