import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="footer-top py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-6 mt-3">
                            <img src="Assets/footer-logo.png" alt="" className="img-fluid" />
                            <div className='d-flex gap-3 flex-wrap mt-3'>
                                <Link to='/'><img src="Assets/logo-twitter.svg" alt="" className="img-fluid" /></Link>
                                <Link to='/'><img src="Assets/logo-facebook.svg" alt="" className="img-fluid" /></Link>
                                <Link to='/'><img src="Assets/logo-instagram.svg" alt="" className="img-fluid" /></Link>
                                <Link to='/'><img src="Assets/logo-linkedin.svg" alt="" className="img-fluid" /></Link>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mt-3">
                            <div>
                                <h4 className="text-secondary mb-3 fs-5">Company</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/about" className="text-decoration-none footer-li-color">About us</Link>
                                    </li>
                                    <li className='mt-2'>
                                        <Link to="/contactus" className="text-white text-decoration-none">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mt-3">
                            <div>
                                <h4 className="text-secondary mb-3 fs-5">Product</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/" className="text-white text-decoration-none">Features</Link>
                                    </li>
                                    <li className='mt-2'>
                                        <Link to="/pricing" className="text-white text-decoration-none">Pricing</Link>
                                    </li>
                                    <li className='mt-2'>
                                        <Link to="/" className="text-white text-decoration-none">News</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-6 mt-3">
                            <div>
                                <h4 className="text-secondary mb-3 fs-5">Legal</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link>
                                    </li>
                                    <li className='mt-2'>
                                        <Link to="/terms&conditions" className="text-white text-decoration-none">Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer