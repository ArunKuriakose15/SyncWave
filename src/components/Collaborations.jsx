import React from 'react'

const Collaborations = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <img
                            src="https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                            alt="WORK"
                            className="img-fluid w-75"
                        />
                    </div>

                    <div className="col-12 col-md-6 text-center text-md-start">
                        <h2 className="fw-bold raleway-text" style={{ color: "#003135" }}>
                            COLLABORATION'S
                        </h2>
                        <p className="text-muted raleway-text" style={{ fontSize: "25px", color: "#003135" }}>
                            At SyncWave, we are dedicated to delivering bespoke digital solutions that drive growth,
                            efficiency, and innovation for your business. Our team of experts is committed to staying ahead of technological
                            advancements to ensure that your business remains at the forefront of digital transformation.
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <div className="border-bottom" style={{ width: "50%", borderWidth: "3px", borderColor: "#000" }}></div>
                </div>

                <br /><br />

                <div className="container my-5">
                    <div className="row text-center">
                        <div className="col-12 col-md-4">
                            <h1 className="fw-bold">
                                100<span style={{ color: "#9b0f30" }}>+</span>
                            </h1>
                            <p className="text-muted">Digital Strategy Consulting</p>
                        </div>
                        <div className="col-12 col-md-4 border-start border-end">
                            <h1 className="fw-bold">
                                350<span style={{ color: "#9b0f30" }}>+</span>
                            </h1>
                            <p className="text-muted">AI and Machine Learning Solutions</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <h1 className="fw-bold">
                                5k<span style={{ color: "#9b0f30" }}>+</span>
                            </h1>
                            <p className="text-muted">Mobile and Web Application Development</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <div className="border-bottom" style={{ width: "50%", borderWidth: "3px", borderColor: "#000" }}></div>
                </div>
            </div>

        </div>
    )
}

export default Collaborations