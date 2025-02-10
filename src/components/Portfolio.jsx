import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer';
import educationVideo from '../assets/video/education.mp4';
import healthVideo from '../assets/video/healthcare.mp4';
import hospitalityVideo from '../assets/video/hospitality.mp4';
import beautyVideo from '../assets/video/beauty.mp4';
import ecommerceVideo from '../assets/video/e-commerce.mp4';
import fitnessVideo from '../assets/video/fitness.mp4';

const Portfolio = () => {
    const projects = [
        { category: "Education", description: "Solutions for schools and institutions.",
            video: educationVideo
         },
        { category: "Healthcare", description: "Digital platforms for hospitals and clinics.",
            video: healthVideo
         },
        { category: "Hospitality", description: "Engaging platforms for hotels and resorts.",
            video: hospitalityVideo
         },
         { category: "Beauty & Grooming", description: "Advanced solutions for salons and spas.",
            video: beautyVideo
         },
        { category: "E-commerce", description: "Feature-rich online stores.",
            video: ecommerceVideo
         },
         { category: "Fitness", description: "Motivational, user-friendly platforms for gyms and fitness centers.",
            video: fitnessVideo
         }
    ];
    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row raleway-text">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Our Portfolio</h2>
                        {projects.map((project, index) => (
                            <div key={index} className="service-card  d-flex shadow border-0 text-center rounded-4 flex-column flex-md-row align-items-center mb-4">

                                <video className="w-100 w-md-50" height="250" autoPlay loop muted>
                                    <source src={project.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                <div className="  flex-grow-1 w-100 w-md-50">
                                    <div className="card-body ">
                                        <h5 className="card-title">{project.category}</h5>
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Portfolio