import React from 'react';
import CountUp from 'react-countup';


function Whatistektime() {
    return (
        <div className='my-5 pt-5'>
            <div className="container">
                <p className="description text-danger">What is Tek Time</p>
                <h3 className='main-heading fs-3 fw-bold'>Scheduling and managing meetings used to be <br className="d-none d-md-block" /> challenging, but this platform makes it effortless</h3>
                <div className="row mt-5 ">
                    <div className="col-md-6 mt-4">
                        <div className='d-flex justify-content-center'>
                        <img src="Assets/report 1.svg" alt="" className="img-fluid" data-aos="fade-right"/>
                        </div>
                    </div>
                    <div className="col-md-6 mt-4" data-aos="fade-down">
                        {/* <div className="text-center">
                            <img src="Assets/Fill.svg" alt="" className="img-fluid" />
                        </div> */}
                        <div className="d-flex align-items-center">
                            <div>
                                <img src="Assets/Meeting 1.svg" alt="" className="img-fluid" />
                            </div>
                            <div>
                                <img src="Assets/Option 1.svg" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <p className="description">
                            TekTime is a comprehensive platform for seamless scheduling, <br className="d-none d-md-block" /> conducting, and managing meetings with robust collaboration, <br className="d-none d-md-block" /> task management, and integration features. It enhances <br className="d-none d-md-block" /> productivity by offering real-time collaboration tools, <br className="d-none d-md-block" /> automated reminders, and detailed analytics.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Whatistektime;
