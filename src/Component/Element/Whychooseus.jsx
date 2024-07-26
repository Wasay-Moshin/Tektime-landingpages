import React from "react";
import CalendlyLink from "./CalendlyLink";
import { Link } from "react-router-dom";
function Whychooseus() {
  const openCalendlyLink = CalendlyLink("https://www.sunrisecharity.com/");
  return (
    <div className="mt-5 pt-g why-choose-us py-5" data-aos="zoom-in-up">
      <div className="container text-center">
        <p className="description text-danger">WHY CHOOSE US</p>
        <h4 className="main-heading fs-3 fw-bold mt-4 mb-5">
          People choose us because we <br className="d-none d-md-block" /> serve
          the best for everyone
        </h4>
        <div className="row">
          <div className="col-md-4">
            <button className=" mt-3 text-start">
              <div className="d-flex gap-4">
                <div>
                  <img
                    src="Assets/landing/associative.svg"
                    alt=""
                    width={60}
                    //   className="img-fluid"
                  />
                </div>
                <div>
                  <h6 className="main-heading fs-5 fw-bold">Associative</h6>
                  <p className="description">
                    A portion of sales will be donated to the Sunrise Charity
                    associative platform.
                    <br />
                    <img
                      onClick={openCalendlyLink}
                      src="Assets/landing/sun.jpeg"
                      alt=""
                      className="img-fluid mt-3"
                    />
                  </p>
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-4 mt-3 text-start">
            <div className="d-flex gap-4">
              <div>
                <img
                  src="Assets/landing/ecological.svg"
                  alt=""
                  width={60}

                  //   className="img-fluid"
                />
              </div>
              <div>
                <h6 className="main-heading fs-5 fw-bold">Ecological</h6>
                <p className="description">
                  The tool does not generate unnecessary emails.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3 text-start">
            <div className="d-flex gap-4">
              <div>
                <img
                  src="Assets/landing/privacy.svg"
                  alt=""
                  width={60}

                  //   className="img-fluid"
                />
              </div>
              <div>
                <h6 className="main-heading fs-5 fw-bold">Privacy</h6>
                <ul>
                  <li>Collects only the data that is really necessary. </li>
                  <li>Transparency with all our users.</li>
                  <li>
                    Respect for the rights of individuals as well as the rights
                    of access, deletion, or rectification.
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

export default Whychooseus;
