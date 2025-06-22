/*const Contact = () => (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>Send us an email at contact@example.com</p>
    </div>
  );
  
  export default Contact;*/

  import React, { useState } from 'react';
import './Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Please send us a message and we will get back to you shortly.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
