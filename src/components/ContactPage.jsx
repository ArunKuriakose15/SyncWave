import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const ContactPage = () => {
  return (
    <div>
      <NavBar />

      <div className="container mt-4  -items-center">
        <h2 className="text-center mb-4 raleway-text">Contact Us</h2>
        <form>
          <div className="mb-3">
            <label className="form-label raleway-text">Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label className="form-label raleway-text">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label raleway-text">Phone Number</label>
            <input type="text" className="form-control" placeholder="+1234567890" />
          </div>
          <div className="mb-3">
            <label className="form-label raleway-text">Message</label>
            <textarea className="form-control" rows={4}></textarea>
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
      
      <div className="fixed-bottom">
        <Footer />
      </div>


    </div>
  )
}

export default ContactPage