import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const ContactPage = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    if (e.target.value.length <= 1000) {
      setMessage(e.target.value);
    }
  };

  return (
    <div>
      <NavBar />

      <div className="container mt-5 p-4 mx-auto max-w-lg bg-white shadow-lg rounded-lg">
        <h2 className="text-center mb-4 text-2xl font-semibold raleway-text">Contact Us</h2>
        <form>
          <div className="mb-3">
            <label className="form-label raleway-text">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label className="form-label raleway-text">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label className="form-label raleway-text">Phone Number</label>
            <input type="tel" className="form-control" placeholder="+1234567890" required />
          </div>
          <div className="mb-3">
            <label className="form-label raleway-text">Project Budget</label>
            <select className="form-control" required>
              <option value="">Select a budget range</option>
              <option value="under-1000">Under $1,000</option>
              <option value="1000-5000">$1,000 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="above-10000">Above $10,000</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label raleway-text">Project Deadline</label>
            <input type="date" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label raleway-text">Message</label>
            <textarea className="form-control" rows={4} value={message} onChange={handleMessageChange} placeholder="Enter your message (max 1000 characters)" required></textarea>
            <small className="text-muted">{message.length}/1000</small>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
