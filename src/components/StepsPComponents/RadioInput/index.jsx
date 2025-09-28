import React from "react";
import "./radioInput.scss";

const index = ({ children }) => {
  const randomId = Math.random();

  return (
    <div className="radioInput">
      <input id={randomId} name="radio" type="radio" />
      <label htmlFor={randomId} className="radioInput-label">
        {children}
      </label>
    </div>
  );
};

export default index;
