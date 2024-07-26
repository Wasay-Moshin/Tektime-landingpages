import React from "react";
import CalendlyLink from "./CalendlyLink";
function Streamllineyourmeeting() {
  const openCalendlyLink = CalendlyLink(
    "https://calendly.com/tektime/tektime-qu-est-ce-que-c-est"
  );
  return (
    <div className="mt-5">
      <div className="container pt-5 border-top">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 mt-4">
            <h4 className="main-heading fw-bold fs-4">
              Ready to streamline your meeting?
            </h4>
            <p className="description fs-6">
              With TekTime, you can easily manage your meetings with real-time
              updates, scheduling, and detailed participant insights.
            </p>
          </div>
          <div className="col-md-5 mt-4 text-end">
            <button onClick={openCalendlyLink} className="btn-primary">
              Get a free demo now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Streamllineyourmeeting;
