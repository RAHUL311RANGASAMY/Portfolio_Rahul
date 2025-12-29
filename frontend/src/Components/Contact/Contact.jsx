import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for submission status
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus(data.error || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error.so, Please try again later.");
    }
  };

  return (
    <div className="contact" id="connect-scroll">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-lr">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <div className="left-para">
            <p>
              I am currently available to take on new projects. Feel free to
              send me a message about anything you want me to work on. You can
              contact me anytime.
            </p>
          </div>
          <div className="left-agenta">
            <img src={mail_icon} alt="" />
            <p>rahulrangasamy311@gmail.com</p>
          </div>
          <div className="left-agenta">
            <img src={call_icon} alt="" />
            <p>+919500234760</p>
          </div>
          <div className="left-agenta">
            <img src={location_icon} alt="" />
            <p>Coimbatore</p>
          </div>
        </div>

        <div className="contact-rights">
          <form className="contact-right" onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Write your message here</label>
            <textarea
              name="message"
              rows="8"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="submit-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
