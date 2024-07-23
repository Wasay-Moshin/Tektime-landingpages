import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Trackmoment() {
  return (
    <div className="mt-5 pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mt-3">
            <img
              src="Assets/image (2).svg"
              alt=""
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
          <div className="col-md-6 mt-3" data-aos="fade-down">
            <h4 className="main-heading fw-bold fs-1">
              Track moment’s progress <br className="d-none d-md-block" /> with
              our advanced platform
            </h4>
            <p className="description mt-4">
              Track the progress of meetings and their steps effortlessly with
              this platform, featuring real-time updates, task assignments, and
              comprehensive analytics
            </p>
            <Link
              to=""
              className="darkblue-txtcolor description fw-bold text-decoration-none fs-5"
            >
              Get a demo now <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trackmoment;
