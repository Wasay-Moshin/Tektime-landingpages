import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import CalendlyLink from "./CalendlyLink";
const plans = [
  {
    id: 1,
    title: "Offer Free for 3 months",
    subtitle: "For 1 licence",
    description: "2 months free, after X € /months",
  },
  {
    id: 2,
    title: "The offer S (Small)",
    subtitle: "For 3 licences",
    description: "2 months free, after X € /months",
  },
  {
    id: 3,
    title: "The offer M (Medium)",
    subtitle: "For 5 licences",
    description: "2 months free, after X € /months",
  },
  {
    id: 4,
    title: "The offer L (Large)",
    subtitle: "For 15 licences",
    description: "2 months free, after X € /months",
  },
  {
    id: 5,
    title: "The offer X (X Large)",
    subtitle: "For 50 licences",
    description: "2 months free, after X € /months",
  },
];

function Pricingandplans({ heading, mainheading }) {
  const openCalendlyLink = CalendlyLink(
    "https://calendly.com/tektime/tektime-qu-est-ce-que-c-est"
  );
  return (
    <div className="pt-5" id="pricing">
      <div className="container text-center">
        <p className="description text-danger">{heading}</p>
        <h4 className="main-heading fw-bold fs-3">{mainheading}</h4>
        <div className="row">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="col-lg-4 col-md-4 mt-4 mt-md-5 px-5 px-md-2 px-lg-5"
            >
              <div className="card shadow border-0 rounded-4 pb-3">
                <div className="card-body">
                  <p className="description darkblue-txtcolor fw-bold">
                    {plan.title}
                  </p>
                  <h4 className="main-heading fs-3 fw-bold">
                    <span className="fs-5">For</span>{" "}
                    <span>{plan.subtitle}</span>
                  </h4>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button className="pricing-btn fw-bold" onClick={openCalendlyLink}>
                    Start Free Trial <FaArrowRight className="ms-3" />
                  </button>
                  {/* <p className="description fs-6 mt-2">
                    {plan.description}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricingandplans;
