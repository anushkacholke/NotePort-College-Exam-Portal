import React from "react";

function Contact() {
  return (
    <div className="container">
      <h2 className="heading-xl">📬 Contact Us</h2>
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Your Name" required />

        <label>Email:</label>
        <input type="email" placeholder="you@example.com" required />

        <label>Message:</label>
        <textarea placeholder="Your message..." rows={5} required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;