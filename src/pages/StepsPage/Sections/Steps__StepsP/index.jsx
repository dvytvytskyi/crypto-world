import React from "react";
import Button from "../../../../components/UI/Button";
import "./steps__StepsP.scss";

const index = ({ activeStep, setActiveStep }) => {
  return (
    <section className="steps__content-buttons">
      {activeStep === 1 ? (
        <Button className="button--purple">
          <h4>1</h4>
          <span>Select</span>
        </Button>
      ) : (
        <Button
          className="button--grey"
          handler={() => (activeStep >= 1 ? setActiveStep(1) : "")}
        >
          <h4>1</h4>
        </Button>
      )}

      <div
        className={`${
          activeStep === 1
            ? "steps__content-line active"
            : "steps__content-line"
        }`}
      ></div>

      {activeStep === 2 ? (
        <Button className="button--purple">
          <h4>2</h4>
          <span>Enter</span>
        </Button>
      ) : (
        <Button
          className="button--grey"
          handler={() => (activeStep >= 2 ? setActiveStep(2) : "")}
        >
          <h4>2</h4>
        </Button>
      )}

      <div
        className={`${
          activeStep === 3
            ? "steps__content-line active"
            : "steps__content-line"
        }`}
      ></div>

      {activeStep === 3 ? (
        <Button className="button--purple">
          <h4>3</h4>
          <span>Preview</span>
        </Button>
      ) : (
        <Button
          className="button--grey"
          handler={() => (activeStep >= 3 ? setActiveStep(3) : "")}
        >
          <h4>3</h4>
        </Button>
      )}
    </section>
  );
};

export default index;
