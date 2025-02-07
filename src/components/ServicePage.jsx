import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import webDevVideo from '../assets/video/web-development.mp4';
import appDevVideo from '../assets/video/app-development.mp4';
import uiUxVideo from '../assets/video/ui-ux.mp4';
import seoVideo from '../assets/video/seo.mp4';
import digitalMarketingVideo from '../assets/video/digital-marketing.mp4';

const ServicePage = () => {
    const services = [
        {
            title: "Web Development",
            description: "Responsive, scalable, and innovative websites.",
            video: webDevVideo
        },
        {
            title: "App Development",
            description: "High-performance mobile apps for Android & iOS.",
            video: appDevVideo
        },
        {
            title: "UI/UX Design",
            description: "Seamless and visually appealing experiences.",
            video: uiUxVideo
        },
        {
            title: "SEO",
            description: "Optimize websites to rank highly on search engines.",
            video: seoVideo
        },
        {
            title: "Digital Marketing",
            description: "Effective online marketing strategies.",
            video: digitalMarketingVideo
        }
    ];


    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row raleway-text">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Our Services</h2>
                        {services.map((service, index) => (
                            <div key={index} className="service-card d-flex shadow border-0 text-center rounded-4 flex-column flex-md-row align-items-center mb-4">
                                {/* Video on the left */}
                                <video className="w-100 w-md-50" height="250" autoPlay loop muted>
                                    <source src={service.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Content on the right */}
                                <div className="  flex-grow-1 w-100 w-md-50">
                                    <div className="card-body ">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServicePage;
