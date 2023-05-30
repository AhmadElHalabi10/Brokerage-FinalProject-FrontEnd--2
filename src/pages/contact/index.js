import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://almorad-app-api.onrender.com/contactUs`,
        {
          userName,
          email,
          description: subject,
        }
      );

      const data = response.data;

      if (response.status === 200) {
        setResponseMessage(data.message);
      } else {
        setResponseMessage(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <div className="contact-hero">
        <h1 className="contact-hero-h1">
          <span className="contact-hero-h1-1">Contact us</span> for your dream
          property. We're here to help.
        </h1>
      </div>
      <div className="contact-bigger">
        <div className="contact">
          <div className="contact-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="userName"
                placeholder="Your name.."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "200px" }}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              ></textarea>

              <input type="submit" value="Submit" />
            </form>
          </div>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
}
