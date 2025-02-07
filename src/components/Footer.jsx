import React, { useState } from 'react'

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);

  return (
    <div>
      <div className="bg-dark text-white py-3 mt-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-md-4">
              <p className="m-0">© {new Date().getFullYear()} SyncWave. All rights reserved.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <p className="m-0">
                Contact us: <a href="mailto:contact@synwave.com" className="text-white">contact@synwave.com</a>
              </p>
              <button className="btn mt-2"style={{ background: "#9AC8CD" }} onClick={handleModalOpen}>Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Subscription */}
      {showModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-hidden="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Subscribe to Newsletter</h5>
                <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter your email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Footer