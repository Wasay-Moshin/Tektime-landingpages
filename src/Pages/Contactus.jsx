import React from 'react'

function Contactus() {
    return (
        <div className='mt-5 pt-5'>
            <div className="why-choose-us py-4 pb-5">
                <div className="container pb-5" >
                    <div className="text-center">
                        <h5 className="main-heading fw-bold my-4">Contact us</h5>
                        <p className="description">With lots of unique blocks, you can easily build a page without coding. <br className="d-none d-md-block" /> Build your next consultancy website within few minutes.</p>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-4 mt-4">
                            <div className="d-flex gap-2">
                                <div>
                                    <img src="Assets/call.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                    <h5 className="main-heading fs-5 fw-bold">Call us</h5>
                                    <p className="description fs-6 mb-0">+1-940-394-2948</p>
                                    <p className="description fs-6 mb-0">+1-389-385-3807</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="d-flex gap-2">
                                <div>
                                    <img src="Assets/mail.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                    <h5 className="main-heading fs-5 fw-bold">Email us</h5>
                                    <p className="description fs-6 mb-0">info@tektime.io</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="d-flex gap-2">
                                <div>
                                    <img src="Assets/call.png" alt="" className="img-fluid" />
                                </div>
                                <div>
                                    <h5 className="main-heading fs-5 fw-bold">Visit us</h5>
                                    <p className="description fs-6 mb-0">34 Madison Street, <br className="d-none d-md-block" />NY, USA 10005</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card border-0 rounded-3 mt-5 card-shadow mb-5 rounded-4" data-aos="zoom-in">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mt-4">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1" class="mb-1 fw-bold description">First & Last name</label>
                                        <input
                                            type="text"
                                            placeholder="i.e. john dow"
                                            class="form-control description fs-6"
                                            id="exampleFormControlInput1"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1" class="mb-1 fw-bold description">Email</label>
                                        <input
                                            type="text"
                                            placeholder="i.e. john@mail.com"
                                            class="form-control description fs-6"
                                            id="exampleFormControlInput1"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1" class="mb-1 fw-bold description">Phone Number</label>
                                        <input
                                            type="text"
                                            placeholder="i.e. +1-234-567-7890"
                                            class="form-control description fs-6"
                                            id="exampleFormControlInput1"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div class="form-group">
                                        <label for="exampleFormControlSelect1" class="mb-1 fw-bold description">Subject</label>
                                        <input
                                            type="text"
                                            placeholder="i.e. I need a help"
                                            class="form-control description fs-6"
                                            id="exampleFormControlInput1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-4">
                                <label for="exampleFormControlTextarea1" class="mb-1 description fw-bold">Message</label>
                                <textarea
                                    class="form-control description fs-6"
                                    id="exampleFormControlTextarea1"
                                    placeholder="Type your message"
                                    rows="5"
                                ></textarea>
                            </div>
                            <button className="btn signup-btn text-white px-5 py-2 my-3 mt-4">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus