import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const ContactPage = () => {
  return (
    <div>
        <NavBar/>

        <div className="container mt-4">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" placeholder="+1234567890" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows={3}></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>

        <Footer/>

    </div>
  )
}

export default ContactPage