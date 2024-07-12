import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('navbar');
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="home-header">
            <nav id="navbar" className="container-fluid navbar fixed-top navbar-expand-lg py-3">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src="Assets/logo.png" alt="" className="img-fluid" />
                    </Link>
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav ms-auto d-flex right-dropdown-profile">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Solutions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Contact</Link>
                                </li>
                                <li className="nav-item border-start">
                                    <Link to="/" className="nav-link ps-3">Sign In</Link>
                                </li>
                            </ul>
                            <button className="btn signup-btn text-white  py-1 px-3 ms-md-2 ms-0 mt-2 mt-lg-0">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
