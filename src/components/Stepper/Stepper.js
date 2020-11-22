import React from "react";

import "./Steper.css";

function StepperJob() {
  return (
    <>
      <h2 className="title__home-how">How to pick a job</h2>
      <div className="stepper-container-home">
        <div>
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="24px"
          >
            <circle cx="12" cy="12" r="12" fill="#3F51B5"></circle>
            <text
              className="text-in-circles"
              x="12"
              y="16"
              text-anchor="middle"
            >
              1
            </text>
          </svg>
          <span>Sign In To Our Website!</span>
        </div>
        <span className="step-lines"></span>
        <div>
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="24px"
          >
            <circle cx="12" cy="12" r="12" fill="#3F51B5"></circle>
            <text
              className="text-in-circles"
              x="12"
              y="16"
              text-anchor="middle"
            >
              2
            </text>
          </svg>
          <span>Search For a Job</span>
        </div>

        <span className="step-lines"></span>

        <div>
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="24px"
          >
            <circle cx="12" cy="12" r="12" fill="#3F51B5"></circle>
            <text
              className="text-in-circles"
              x="12"
              y="16"
              text-anchor="middle"
            >
              3
            </text>
          </svg>
          <span>Go to interview</span>
        </div>
      </div>
    </>
  );
}

export default StepperJob;
