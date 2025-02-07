import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const WhyChooseUsPage = () => {
    const why = [
        {
            title: "Cutting-Edge Technologies",
            image: "https://images.pexels.com/photos/8721315/pexels-photo-8721315.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "We integrate the latest technologies in every project, ensuring high performance, security, and scalability."
        },
        {
            title: "Future-Ready Solutions",
            image: "https://images.pexels.com/photos/7163010/pexels-photo-7163010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: " Our solutions are designed for the future, avoiding outdated platforms like WordPress and Shopify to ensure long-term innovation."
        },
        {
            title: "Custom-Built for Excellence",
            image: "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Every project is tailored to your unique needs, providing optimized, high-quality results that set you apart from the competition."
        }
    ];
    return (
        <div>
            <NavBar />

            <div className="container my-5 raleway-text">
                <h2 className="text-center mb-4">Why Choose Us?</h2>
                {why.map((choose, index) => (
                <div className="row align-items-center g-3 mb-5 service-card">
                    
                    <div key={index}  className="col-12 col-md-6 d-flex justify-content-center">
                        <img
                            src={choose.image}
                            alt="WORK"
                            className="img-fluid w-75"
                        />
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start">
                        <h2 className="fw-bold" style={{ color: "#003135" }}>
                            {choose.title}
                        </h2>
                        <p className="text-muted" style={{ fontSize: "25px", color: "#003135" }}>
                            {choose.description}
                        </p>
                    </div>
                </div>
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default WhyChooseUsPage