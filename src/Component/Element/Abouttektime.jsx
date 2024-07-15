import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Abouttektime() {
    return (
        <div className='mt-5 pt-5 about-tektime'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <p className="description fs-6 text-danger">ABOUT TEKTIME</p>
                        <h3 className="main-heading fw-bold">Our <span className="darkblue-txtcolor">view</span> of the <br className="d-none d-md-block" /> world</h3>
                        <p className="description fw-bold">At TekTIME, we believe that real change starts with ourselves and concrete actions in our daily lives. By valuing time as our most precious resource, we strive to make a meaningful impact and bring quality and value to everything we do. Through changing our own world, we aim to make a difference in the world at large.</p>
                        <div className="d-flex gap-2 align-items-center">
                            <FaArrowRight className='text-danger' />
                            <span className="description fw-bold">Change the world, one step at a time</span>
                        </div>
                        <div className="d-flex gap-2 align-items-center mt-2">
                            <FaArrowRight className='text-danger' />
                            <span className="description fw-bold">Value time</span>
                        </div>
                        <button className="btn signup-btn text-white mt-3">Get a free demo now</button>
                    </div>
                    <div className="col-md-6 mt-3">
                        <img src="Assets/about-tektime.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abouttektime