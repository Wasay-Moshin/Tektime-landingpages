import React from 'react'

function Testimonials() {
    return (
        <div className='mt-5 testimonials py-5'>
            <div className="container">
                <p className="description fs-6 green-txtcolor text-center">TESTIMONIALS</p>
                <div>
                    <h4 className="main-heading fs-3 fw-bold text-white border-bottom pb-3">“Simply the best. Better than all the rest. I’d recommend this product to beginners <br className="d-none d-md-block" /> and advanced users.”</h4>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-2 mt-3 align-items-center">
                            <div>
                                <img src="Assets/testimonial-img.svg" alt="" className="img-fluid" />
                            </div>
                            <div>
                                <p className="description fs-6 text-white mb-0">lan Klein</p>
                                <p className="description fs-6  mb-0">Digital Marketer</p>
                            </div>
                        </div>
                        <div className="d-flex gap-2 align-items-center mt-3">
                            <img src="Assets/arrow-left.svg" alt="" className="img-fluid" />
                            <img src="Assets/arrow-right.svg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials