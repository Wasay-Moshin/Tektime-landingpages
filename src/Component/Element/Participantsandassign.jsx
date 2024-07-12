import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

function Participantsandassign() {
    return (
        <div className='mt-5'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mt-3">
                        <h4 className="main-heading fw-bold fs-3">See participants & Assign <br className="d-none d-md-block" /> actions fast</h4>
                        <p className="description mt-4 fs-5">Get real-time data on participants with this <br className="d-none d-md-block" /> platform, offering detailed insights into <br className="d-none d-md-block" /> attendance, engagement, and their roles</p>
                        <Link to="" className='darkblue-txtcolor description fw-bold text-decoration-none fs-5'>Get a demo now <FaArrowRight /></Link>
                    </div>
                    <div className="col-md-6 mt-3">
                        <img src="Assets/participants.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Participantsandassign