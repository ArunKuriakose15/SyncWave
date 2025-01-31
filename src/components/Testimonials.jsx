import React from "react";

const testimonials = [
    {
        name: "JOHN SMITH",
        role: "CEO, Tech Innovations Inc.",
        image: "https://static.sitemantic.com/webbuilder/images/testimonials/img-7.jpg",
        text: "Choosing SyncWave as our digital partner was a game-changer for our business. Their expertise and dedication have propelled us into a new era of digital success.",
        icons: ["linkedin", "github", "dribbble"],
    },
    {
        name: "EMILY JOHNSON",
        role: "CMO, Global Solutions Group",
        image: "https://static.sitemantic.com/webbuilder/images/testimonials/img-3.jpg",
        text: "SyncWave's digital solutions have revolutionized our digital strategies, leading to remarkable growth and enhanced customer engagement.",
        icons: ["linkedin", "github", "dribbble"],
    },
    {
        name: "MICHAEL DAVIS",
        role: "CTO, InnovateTech Enterprises",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        text: "SyncWave's commitment to excellence and innovation is truly remarkable. They have elevated our digital capabilities and positioned us for sustained success.",
        icons: ["linkedin", "github", "dribbble"],
    },
];

const Testimonials = () => {
    return (
        <div className="container-fluid my-5">
            <h2 className="text-center fw-bold">CLIENT TESTIMONIALS</h2>
            <p className="text-center text-muted">
                Discover what our clients have to say about their experiences with our advanced digital solutions.
            </p>
            <br />
            <div className="row justify-content-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="col-md-4 d-flex justify-content-center">
                        <div className="card shadow border-0 text-center rounded-4" style={{ width: "20rem" }}>
                            <div className="card-body pt-5"> {/* Increased padding-top */}
                                <div className="d-flex justify-content-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="rounded-circle border"
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            objectFit: "cover",
                                            marginTop: "-50px",
                                        }}
                                    />
                                </div>
                                <h5 className="fw-bold mt-3">{testimonial.name}</h5>
                                <p className="text-muted">{testimonial.role}</p>
                            </div>
                            <div className="card-footer text-white rounded-bottom-4" style={{ background: "#003135" }}>
                                <p className="mb-3 px-3">{testimonial.text}</p>
                                <div className="d-flex justify-content-center gap-3">
                                    {testimonial.icons.map((icon, i) => (
                                        <i key={i} className={`bi bi-${icon} fs-4 text-white`}></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
