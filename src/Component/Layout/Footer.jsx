import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import CalendlyLink from "../Element/CalendlyLink";
function Footer() {
  const openCalendlyLink = CalendlyLink(
    "https://www.instagram.com/tektime.io/"
  );
  const openCalendlyLink1 = CalendlyLink(
    "https://www.linkedin.com/company/tektimesolutions"
  );
  return (
    <div id="footer" className="footer">
      <div className="footer-top py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center text-md-start mt-4">
              <img
                src="Assets/landing/White-logo 1.png"
                alt=""
                className="img-fluid"
              />
              <div className="d-flex gap-4 flex-wrap mt-4 social-icons">
                <FaSquareFacebook className="icons" size={20} />
                <FaInstagram
                  onClick={openCalendlyLink}
                  className="icons"
                  size={20}
                />
                <FaLinkedin
                  onClick={openCalendlyLink1}
                  className="icons"
                  size={20}
                />
              </div>
            </div>
            <div className="col-md-3 col-6 mt-4">
              <div>
                <h4 className="text-secondary mb-3 fs-5">Company</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/about"
                      className="text-decoration-none footer-li-color"
                    >
                      About us
                    </Link>
                  </li>
                  {/* <li className="mt-2">
                    <Link
                      to="/contactus"
                      className="text-white text-decoration-none"
                    >
                      Contact us
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-4">
              <div>
                <h4 className="text-secondary mb-3 fs-5">Product</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-white text-decoration-none">
                      Features
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/pricing"
                      className="text-white text-decoration-none"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/" className="text-white text-decoration-none">
                      News
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-6 mt-4">
              <div>
                <h4 className="text-secondary mb-3 fs-5">Legal</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="text-white text-decoration-none"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      to="/terms&conditions"
                      className="text-white text-decoration-none"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
