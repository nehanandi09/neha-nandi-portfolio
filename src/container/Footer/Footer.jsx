import React, { useState, useRef } from "react";

import { AppWrap } from "../../wrapper";
import { GrMail, GrGithub } from "react-icons/gr";
import { client } from "../../client";
import emailjs from "@emailjs/browser";
import "./Footer.scss";

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  setTimeout(() => {
    setIsFormSubmitted(false);
  }, 3000);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setIsFormSubmitted(false);
        }
      );
  };

  return (
    <>
      <h1 className="head-text">Connect With Me</h1>

      <div className="app__footer-cards">
        <a href="mailto:nandineha09@gmail.com" className="app__footer-card">
          <GrMail className="icon" />
          <p>nandineha09@gmail.com</p>
        </a>
        <a
          href="https://github.com/nehanandi09"
          target="_blank"
          rel="noreferrer"
          className="app__footer-card"
        >
          <GrGithub className="icon" />
          <p>Github</p>
        </a>
      </div>

      <div className="app__flex app__footer-form">
        <form ref={form} onSubmit={handleSubmit} className="">
          <div className="">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="from_name"
              required
            />
          </div>
          <div className="">
            <input
              className="p-text"
              type="text"
              placeholder="Your Email"
              name="from_email"
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              required
            />
          </div>
          <button type="submit" className="p-text">
            {" "}
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      </div>
      {isFormSubmitted ? (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AppWrap(Footer, "contact");
