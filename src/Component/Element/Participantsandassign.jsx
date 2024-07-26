import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import CalendlyLink from "./CalendlyLink";
function Participantsandassign() {
  const openCalendlyLink = CalendlyLink(
    "https://calendly.com/tektime/tektime-qu-est-ce-que-c-est"
  );
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mt-3" data-aos="fade-down">
            <h4 className="main-heading fw-bold fs-3">
              See participants & Assign <br className="d-none d-md-block" />{" "}
              actions fast
            </h4>
            <p className="description mt-4 fs-5">
              Get real-time data on participants with this{" "}
              <br className="d-none d-md-block" /> platform, offering detailed
              insights into <br className="d-none d-md-block" /> attendance,
              engagement, and their roles
            </p>
            <button onClick={openCalendlyLink} className="btn-demo">
              Get a demo now <FaArrowRight />
            </button>
          </div>
          <div className="col-md-6 mt-3">
            <img
              src="Assets/landing/participants.png"
              alt=""
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Participantsandassign;
