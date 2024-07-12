import React from 'react'

function Heros() {
    return (
        <div className='main-hero'>
            <div id="hero" className="pt-5">
                <div className="container text-center mt-5">
                    <h5 className="main-heading fw-bold pt-4">
                        Manage all your moments, <br className="d-none d-md-block" /> with our solution
                    </h5>
                    <p className="description mt-4 description-txtcolor">For each of your business issues</p>
                    <button className="btn signup-btn text-white px-3">Get a free demo now</button>
                </div>
            </div>

            <div>
                <div className="container hero-img-container">
                    <div className='position-relative hero-img-position'>
                        <img src="Assets/hero-img-positon.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Heros