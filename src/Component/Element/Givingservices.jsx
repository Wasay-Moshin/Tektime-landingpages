import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import CalendlyLink from "./CalendlyLink";
function Givingservices() {
  const openCalendlyLink = CalendlyLink(
    "https://calendly.com/tektime/tektime-qu-est-ce-que-c-est"
  );
  return (
    <div className="mt-5 pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mt-3">
            <img
              src="Assets/landing/customer-happy.png"
              alt=""
              className="img-fluid"
              data-aos="fade-down"
            />
          </div>
          <div className="col-md-6 mt-3" data-aos="fade-down">
            <h4 className="main-heading fw-bold fs-2">
              Make your customers <br className="d--none d-md-block" /> happy by
              giving services.
            </h4>
            <p className="description mt-4 fs-5">
              Save your precious time by not worrying about meetings, as this
              platform handles scheduling, management, and follow-ups
              effortlessly
            </p>
            <button onClick={openCalendlyLink} className="btn-demo">
              Get a demo now <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Givingservices;
