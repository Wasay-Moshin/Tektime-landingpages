import React from "react";
import CalendlyLink from "./CalendlyLink";
function Heros() {
  const openCalendlyLink = CalendlyLink(
    "https://calendly.com/tektime/tektime-qu-est-ce-que-c-est"
  );
  return (
    <div className="main-hero">
      <div id="hero" className="pt-5 mb-4">
        <div className="container text-center mt-5">
          <h5 className="main-heading fw-bold pt-4">
            Manage all your moments, <br className="d-none d-md-block" /> with
            our solution
          </h5>
          <p className="description mt-4 description-txtcolor">
            For each of your business issues
          </p>
          <button className="btn-primary" onClick={openCalendlyLink}>
            Get a free demo now
          </button>
        </div>
      </div>

      <div>
        <div className="container-fluid me-5 hero-img-container">
          <div className="position-relative hero-img-position">
            <img src="/Assets/landing/tektime.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heros;
