import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Collaborations from "./Collaborations";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const syncWaveElement = document.getElementById("syncwave-title");
            if (syncWaveElement) {
                const syncWaveBottom = syncWaveElement.getBoundingClientRect().bottom;
                setShowNavbar(syncWaveBottom < 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            {showNavbar && (
                <div className="fixed-top d-flex justify-content-center">
                    <div className="bg-glass rounded-pill px-5 py-2 w-75 text-center">
                        <h3 className="raleway-text m-8 " style={{ color: "#244855" }}><b>SyncWave</b></h3>
                    </div>
                </div>

            )}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <p id="syncwave-title" className="raleway-text text-center" style={{ fontSize: "90px", color: "#244855" }}>
                            SyncWave
                        </p>
                    </div>
                    <h5 className="raleway-text text-center" style={{ fontSize: "25px", color: "#003135" }}>
                        Empowering businesses with cutting-edge digital solutions, we blend innovation, technology,
                        and creativity to drive growth and transformation. From AI-driven automation to seamless web and mobile experiences,
                        we craft solutions that redefine the future. Elevate your brand with our expertise!
                    </h5>
                </div>

                <br /><br />

                <div className="row">
                    <div className="d-flex flex-column align-items-center">
                        <Link to="/services" >    <button className="btn btn-success rounded-pill roboto-tex" style={{ fontSize: "25px" }}>
                            Explore
                        </button></Link>
                        <div className="border-bottom mt-3" style={{ width: "50%", borderWidth: "3px", borderColor: "#000" }}></div>
                    </div>
                </div>

                <br />
            </div>

            <br /><br />

            <Collaborations />
            <Testimonials />
            <Footer />
        </div>


    );
};

export default HomePage;
