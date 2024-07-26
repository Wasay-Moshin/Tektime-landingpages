import React from "react";

const useCasesData = [
  {
    imgSrc: "Assets/landing/case1.png",
    text: "Process and productivity management",
  },
  {
    imgSrc: "Assets/landing/case2.png",
    text: "Data and analytics solutions",
  },
  {
    imgSrc: "Assets/landing/case3.png",
    text: "Customer engagement platforms",
  },
  {
    imgSrc: "Assets/landing/case4.png",
    text: "IT infrastructure optimization",
  },
];

function UseCases() {
  return (
    <div className="cases">
      <div className="container mt-5">
        <div className="text-center">
          <h1 className="fw-bold">Use cases</h1>
          <p>
            TekTIME opens up a range of innovative solutions that solve all your
            problems
          </p>
        </div>
        <div className="row mt-5">
          {useCasesData.map((caseItem, index) => (
            <div key={index} className="col-md-3 mt-3">
              <div className="card">
                <img src={caseItem.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    {caseItem.text}
                    <span className="arrow">→</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UseCases;
