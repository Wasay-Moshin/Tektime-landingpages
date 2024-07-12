import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Pricingandplans() {
  return (
    <div className='mt-5 pt-5' id='pricing'>
        <div className="container text-center">
            <p className="description text-danger">Our Pricing and plans</p>
            <h4 className="main-heading fw-bold fs-3">We offer a comprehensive meeting <br className="d-none d-md-block" /> platform designed for your needs.</h4>
            <div className="row">
                <div className="col-lg-4 col-md-4 mt-4 mt-md-5 px-5 px-md-2 px-lg-5">
                    <div className="card shadow active-card rounded-4">
                        <div className="card-body">
                            <p className="description darkblue-txtcolor fw-bold">Offer Free for 3 months</p>
                            <h4 className="main-heading fs-3 fw-bold"><span className='fs-5'>For</span> <span>1 licence</span></h4>
                        </div>
                        <div className="card-footer bg-transparent border-0">
                            <button className="btn signup-btn text-white">Start Free Trail <FaArrowRight className='ms-3'/></button>
                            <p className="description fs-6 mt-2">2 months free, after X € <br />/months</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-4 mt-md-5 px-5 px-md-2 px-lg-5">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-body">
                            <p className="description darkblue-txtcolor fw-bold">The offer S (Small)</p>
                            <h4 className="main-heading fs-3 fw-bold"><span className='fs-5'>For</span> <span>3 licence</span></h4>
                        </div>
                        <div className="card-footer bg-transparent border-0">
                            <button className="btn darkblue-txtcolor pricing-btn fw-bold">Start Free Trail <FaArrowRight className='ms-3'/></button>
                            <p className="description fs-6 mt-2">2 months free, after X € <br />/months</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-4 mt-md-5 px-5 px-md-2 px-lg-5">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-body">
                            <p className="description darkblue-txtcolor fw-bold">The offer M (Medium)</p>
                            <h4 className="main-heading fs-3 fw-bold"><span className='fs-5'>For</span> <span>5 licence</span></h4>
                        </div>
                        <div className="card-footer bg-transparent border-0">
                            <button className="btn darkblue-txtcolor pricing-btn fw-bold">Start Free Trail <FaArrowRight className='ms-3'/></button>
                            <p className="description fs-6 mt-2">2 months free, after X € <br />/months</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-4 mt-md-5 px-5 px-md-2 px-lg-5">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-body">
                            <p className="description darkblue-txtcolor fw-bold">The offer L (Large)</p>
                            <h4 className="main-heading fs-3 fw-bold"><span className='fs-5'>For</span> <span>15 licence</span></h4>
                        </div>
                        <div className="card-footer bg-transparent border-0">
                            <button className="btn darkblue-txtcolor pricing-btn fw-bold">Start Free Trail <FaArrowRight className='ms-3'/></button>
                            <p className="description fs-6 mt-2">2 months free, after X € <br />/months</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-4 mt-md-5 px-5 px-md-2 px-lg-5">
                    <div className="card shadow border-0 rounded-4">
                        <div className="card-body">
                            <p className="description darkblue-txtcolor fw-bold">The offer X (X Large)</p>
                            <h4 className="main-heading fs-3 fw-bold"><span className='fs-5'>For</span> <span>50 licence</span></h4>
                        </div>
                        <div className="card-footer bg-transparent border-0">
                            <button className="btn darkblue-txtcolor pricing-btn fw-bold">Start Free Trail <FaArrowRight className='ms-3'/></button>
                            <p className="description fs-6 mt-2">2 months free, after X € <br />/months</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricingandplans