import React, { useState, useRef } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const CareersPage = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleFormToggle = () => {
    // Set the form to show first
    setShowForm(true);
    
    // Then scroll the form into view after it's rendered
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Delay to ensure form is rendered before scroll
  };

  const jobOpenings = [
    {
      title: "Web Developer",
      description: "We are looking for a skilled Web Developer to join our team and build dynamic websites.",
      skills: [
        "Proficient in HTML, CSS, JavaScript, and React",
        "Experience with API integrations",
        "Ability to work with responsive design"
      ]
    },
    {
      title: "Android Developer",
      description: "We are seeking an experienced Android Developer to develop cutting-edge mobile applications.",
      skills: [
        "Experience with Kotlin or Java for Android",
        "Knowledge of Android SDK, UI/UX principles",
        "Familiarity with Firebase and REST APIs"
      ]
    },
    {
      title: "SEO Specialist",
      description: "Join our team as an SEO Specialist to help improve website rankings and online visibility.",
      skills: [
        "Expertise in SEO tools (e.g., Google Analytics, SEMrush)",
        "Strong understanding of on-page and off-page SEO",
        "Experience with content optimization strategies"
      ]
    },
    {
      title: "Video Editor",
      description: "We need a creative Video Editor to produce engaging video content for our brand.",
      skills: [
        "Proficiency in Adobe Premiere Pro, After Effects, etc.",
        "Experience with video editing and animation",
        "Knowledge of video production techniques"
      ]
    }
  ];

  return (
    <div>
      <NavBar />
      <div className="container py-5">
        <h2 className="text-center mb-4 raleway-text">Current Job Openings</h2>

        <div className="row raleway-text">
          {jobOpenings.map((job, index) => (
            <div key={index} className="col-12 col-md-6 mb-4">
              <div className="card shadow-sm service-card">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">{job.description}</p>
                  <ul>
                    {job.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 raleway-text">
          <button className="btn btn-primary" onClick={handleFormToggle}>
            Apply Now
          </button>
        </div>

        {/* Application Form */}
        {showForm && (
          <div ref={formRef} className="form mt-4">
            <div className="form-group">
              <label className="form-label raleway-text">Name</label>
              <input type="text" className="form-control" id="formName" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label className="form-label raleway-text">Email Address</label>
              <input type="email" className="form-control" id="formEmail" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label className="form-label raleway-text">Phone Number</label>
              <input type="tel" className="form-control" id="formPhone" placeholder="Enter your phone number (with country code)" required />
            </div>

            <div className="form-group">
              <label className="form-label raleway-text">Job Profile</label>
              <select className="form-select" id="formJobProfile" required>
                {jobOpenings.map((job, index) => (
                  <option key={index} value={job.title}>{job.title}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label raleway-text">Upload CV</label>
              <input type="file" className="form-control" id="formCV" required />
            </div>

            <div className="d-grid gap-2">
              <button className="btn btn-primary mt-3" type="submit">
                Submit Application
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CareersPage;
