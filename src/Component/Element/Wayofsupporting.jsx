import React from 'react'

function Wayofsupporting() {
    return (
        <div className='my-5 way-of-supporting pt-5'>
            <div className="container text-center">
                <p className="description fs-6 text-danger fw-bold">OUR WAY OF SUPPORTING YOU</p>
                <h3 className="main-heading fw-bold fs-3">Our approach is based on four <br className="d-none d-md-block" /> essential pillars that we call the 4COs</h3>
                <div className="row mt-3">
                    <div className="col-md-6 mt-5">
                        <div className="card border-0 bg-transparent supporting-card h-100">
                            <div className="card-body postion-relative ">
                                <img src="Assets/supporting-cursor.svg" alt="" width={50} className='cursor-img' />
                                <h5 className="main-heading fs-4 fw-bold mt-3">Communication</h5>
                                <p className="description fs-6">Communication is at the heart of everything we do. We believe that good communication helps create strong and lasting relationships. Together, we exchange, share and build a harmonious and productive work environment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="card border-0 bg-transparent supporting-card h-100">
                            <div className="card-body postion-relative ">
                                <img src="Assets/supporting-cursor.svg" alt="" width={50} className='cursor-img' />
                                <h5 className="main-heading fs-4 fw-bold mt-3">Collaboration</h5>
                                <p className="description fs-6">Collaboration is the key to our success. At TekTIME, we encourage teamwork and cooperation. By joining forces and skills, we can accomplish extraordinary things and achieve ambitious goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="card border-0 bg-transparent supporting-card h-100">
                            <div className="card-body postion-relative ">
                                <img src="Assets/supporting-cursor.svg" alt="" width={50} className='cursor-img' />
                                <h5 className="main-heading fs-4 fw-bold mt-3">Trust</h5>
                                <p className="description fs-6">Trust is the foundation of any successful relationship. We make it a point of honor to create a climate of trust where everyone feels valued and respected. Mutual trust allows us to work peacefully and achieve our common goals.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="card border-0 bg-transparent supporting-card h-100">
                            <div className="card-body postion-relative ">
                                <img src="Assets/supporting-cursor.svg" alt="" width={50} className='cursor-img' />
                                <h5 className="main-heading fs-4 fw-bold mt-3">Coaching</h5>
                                <p className="description fs-6">Coaching is essential for personal and professional development. At TekTIME, we support our employees and our customers to help them realize their full potential. Together, we continually grow and evolve.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Wayofsupporting