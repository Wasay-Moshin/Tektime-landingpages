import React, { useState, useEffect } from "react";
import CountUp from 'react-countup';

function Percentage() {
  const [counterKey, setCounterKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterKey(prevKey => prevKey + 1);
    }, 5000); // Change the interval time as needed (5000 ms = 5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid p-5"> 
      <div className="row mt-4">
        <div className="col-md-4 mt-3 text-center border-end">
          <h1 className="main-heading fw-bold">
            <CountUp key={counterKey} start={0} end={47} suffix="%" delay={0} />
          </h1>
          <p className="description">
            Employees believe that meetings are the biggest waste of time at work.
          </p>
        </div>
        <div className="col-md-4 mt-3 text-center border-end">
          <h1 className="main-heading fw-bold">
            <CountUp key={counterKey + 1} start={0} end={100} prefix="€" suffix="M" delay={0} />
          </h1>
          <p className="description">
            Lost per year by companies due to ineffective meetings.
          </p>
        </div>
        <div className="col-md-4 mt-3 text-center">
          <h1 className="main-heading fw-bold">
            <CountUp key={counterKey + 2} start={0} end={34} suffix="%" delay={0} />
          </h1>
          <p className="description">
            Employees are burnt out, with 13% being severely burnt out.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Percentage;
