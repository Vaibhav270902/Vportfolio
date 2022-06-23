import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Education</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Bachelor of Engineering <span className="h6">from Silver Oak University</span></h5>
                                    <p className="mb-0">APR 2016 - APR 2019</p>
                                    <small>Extra curricular activities like sport and labs and all were good here and gender raotio and student parties and workshops cultural societies are also good no tolerance of gender ethnicity race religion sexual orientation and anything else</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Master of Engineering <span className="h6">from Stanford University</span></h5>
                                    <p className="mb-0">APR 2019 - APR 2021</p>
                                    <small> I've found the environment at Stanford to be extremely supportive. Everyone is friendly, you'll make your best friends here, and the atmosphere is one of cooperation rather than competition.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;