import React from 'react'

function Whychooseus() {
    return (
        <div className='mt-5 pt-g why-choose-us py-5' data-aos="zoom-in-up">
            <div className="container text-center">
                <p className="description text-danger">WHY CHOOSE US</p>
                <h4 className="main-heading fs-3 fw-bold mt-4 mb-5">People choose us because we <br className="d-none d-md-block" /> serve the best for everyone</h4>
                <div className="row">
                    <div className="col-md-4 mt-3 text-start">
                        <div className="d-flex gap-3">
                            <div>
                                <img src="Assets/associative.svg" alt="" width={130} className="img-fluid" />
                            </div>
                            <div>
                                <h6 className="main-heading fs-5 fw-bold">Associative</h6>
                                <p className="description">Lorem ipsum dolor sit amet consectetur. Elementum odio amet tempor adipiscing nunc libero non.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 text-start">
                        <div className="d-flex gap-3">
                            <div>
                                <img src="Assets/ecological.svg" alt="" width={130} className="img-fluid" />
                            </div>
                            <div>
                                <h6 className="main-heading fs-5 fw-bold">Ecological</h6>
                                <p className="description">Lorem ipsum dolor sit amet consectetur. Elementum odio amet tempor adipiscing nunc libero non.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 text-start">
                        <div className="d-flex gap-3">
                            <div>
                                <img src="Assets/privacy.svg" alt="" width={130} className="img-fluid" />
                            </div>
                            <div>
                                <h6 className="main-heading fs-5 fw-bold">Privacy</h6>
                                <p className="description">Lorem ipsum dolor sit amet consectetur. Elementum odio amet tempor adipiscing nunc libero non.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whychooseus