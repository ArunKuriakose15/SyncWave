import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer';

const Portfolio = () => {
    const projects = [
        { category: "Education", description: "Solutions for schools and institutions." },
        { category: "Healthcare", description: "Digital platforms for hospitals and clinics." },
        { category: "Hospitality", description: "Engaging platforms for hotels and resorts." },
        { category: "E-commerce", description: "Feature-rich online stores." }
    ];
    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <h2 className="text-center mb-4">Our Portfolio</h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{project.category}</h5>
                                    <p className="card-text">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="row raleway-text">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Our Portfolio</h2>
                        {projects.map((project, index) => (
                            <div key={index} className="d-flex shadow border-0 text-center rounded-4 flex-column flex-md-row align-items-center mb-4">
                                {/* Video on the left */}
                                {/* <video className="w-100 w-md-50" height="250" autoPlay loop muted>
                                    <source src={service.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video> */}

                                {/* Content on the right */}
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
            
            <Footer/>
        </div>
    )
}

export default Portfolio