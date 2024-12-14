import React from "react";
import CountUp from "react-countup";
import NewsSection from "./NewsSection";

const Count = () => {
  return (
    <>
    <div className="counts">
      <div className="main-center">
        <div className="count-item">
          <h2>
            <CountUp className="countup" start={0} end={1} decimals={1} suffix="M+" duration={3} />
          </h2>
          <span>Sq ft stone delivered</span>
        </div>
        <div className="count-item">
          <h2>
            <CountUp className="countup" start={0} end={2} duration={3} />
          </h2>
          <span>National/Globally Award</span>
        </div>
        <div className="count-item">
          <h2>
            <CountUp className="countup" start={0} end={20} suffix="+" duration={3} />
          </h2>
          <span>PROJECT COMPLETED</span>
        </div>
        <div className="count-item">
          <h2>
            <CountUp className="countup" start={0} end={99.9} suffix="%" decimals={1} duration={3} />
          </h2>
          <span>Customer Satisfied</span>
        </div>
      </div>
    </div>
    <NewsSection />
    </>
  );
};

export default Count;
