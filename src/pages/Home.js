import React from "react";
import avtar from "./../images/logo.png";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="container pt-5 d-flex flex-column align-items-center">
                <img src={avtar} width={200} alt="Vaibhav" />
                <h1>Vaibhav Solanki</h1>
                <h4>(Software Engineer)</h4>
                <p className="text-center border-bottom pb-3">I am 19 years old from India. I am hungry and ambitious. I will do my best to improve my skills. </p>
                <p className="text-center">
                    <span className="d-mobile-block">Email: vaibhavsolanki557@.com</span>
                    <span className="d-none d-web-contents"> | </span>
                    <span className="d-mobile-block">Phone: +91-8469211681</span>
                </p>
                <p className="text-center">361, Nadiyawad ni pole, Lunsawad, Dariyapur, Ahmedabad-1.</p>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "70%" }}>70%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} >60%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">Python</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }}>60%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">REACTJS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "60%" }} >60%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                                <span class="badge bg-primary me-3 mb-3 p-2">Dancing</span>
                                <span class="badge bg-secondary me-3 mb-3 p-2">Rapping</span>
                                <span class="badge bg-success me-3 mb-3 p-2">Cricket</span>
                                <span class="badge bg-danger me-3 mb-3 p-2">Football</span>
                                <span class="badge bg-warning text-dark me-3 mb-3 p-2">Running</span>
                                <span class="badge bg-info text-dark me-3 mb-3 p-2">Info</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;