import React from "react";

function Content() {
    return (
        <div>
            <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center">
                    <div class="col-lg-8 col-xl-7 col-xxl-6">
                        <div class="my-5 text-center text-xl-start">
                            <h1 class="display-5 fw-bolder text-white mb-2">A Redo For My Website
                            </h1>
                            <p class="lead fw-normal text-white-50 mb-4">I hope I can get my website back to where it was.</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xs-center justify-content-xl-start">
                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Get Started</a>
                                <a class="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-xxl-6 d-sm-flex  justify-content-center videoHomeScreen">
                        {/* col-xl-5 col-xxl-6 col-sm-1 d-none d-xl-block text-center */}
                        <video className="homeScreen" id="bgVideo" preload="true" autoPlay loop muted>
                            <source src="images/Taxi_Night.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
                </div>
        </header>
{/* main content */}
            <section className="features-icons bg-light text-center det-ails">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex  icon-bra-ails">
                                    <i className="icon-screen-desktop m-auto text-primary icon-ails"></i>
                                </div>
                                <h5 className="white">Lorem Tag</h5>
                                <p className="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex  icon-bra-ails">
                                    <i className="icon-layers m-auto text-primary icon-ails"></i>
                                </div>
                                <h5 className="white">Morem Tag</h5>
                                <p className="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                <div className="features-icons-icon d-flex  icon-bra-ails">
                                    <i className="icon-check m-auto text-primary icon-ails"></i>
                                </div>
                                <h5 className="white">Oorem Tag</h5>
                                <p className="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Content;