import React from "react";
import Button from "../../../../components/UI/Button";
import BlockContainer from "../../../../components/UI/BlockContainer";
import InputInfo from "../../../../components/StepsPComponents/InputInfo";
import RadioInput from "../../../../components/StepsPComponents/RadioInput";
import BlocksInfo from "../../../../components/StepsPComponents/BlocksInfo";
import PurchasedPrice from "../../../../components/StepsPComponents/PurchasedPrice";
import "./formCountry__StepsP.scss";

const index = ({ setActiveStep }) => {
  return (
    <section className="steps__formCountry">
      <BlockContainer className="blockContainer--grey">
        <InputInfo
          title="Logo"
          descr="Upload your image"
          type="text"
          width={21.5}
          height={21.5}
          img="/assets/UI/scenery.png"
        />
        <InputInfo
          title="Name"
          descr="Your name"
          type="text"
          width={24}
          height={24}
          img="/assets/UI/person.png"
        />
        <InputInfo
          title="Website link"
          descr="Your website link"
          type="text"
          width={24}
          height={24}
          img="/assets/UI/link.png"
        />
        <InputInfo
          title="Description"
          descr="Description"
          type="text"
          width={24}
          height={24}
          img="/assets/UI/pen.png"
        />
        <div className="steps__formCountry-radioButtons">
          <RadioInput>
            <span className="steps__formCountry-labelInput">
              Don’t show description on the map
            </span>
          </RadioInput>
          <RadioInput>
            <span className="steps__formCountry-labelInput">
              I declare that i had
            </span>
          </RadioInput>
        </div>
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <BlocksInfo />
        <PurchasedPrice />
        <div className="steps__formCountry-button">
          <Button className="button--grey" handler={() => setActiveStep(1)}>
            <img
              src="/assets/UI/btnArrowSlim.svg"
              alt="Image arrow button"
              className="steps__formCountry-imgReverse"
              width={24}
              height={24}
            />
            Back{" "}
          </Button>
          <Button className="button--purple" handler={() => setActiveStep(3)}>
            Next Step{" "}
            <img
              src="/assets/UI/btnArrowSlim.svg"
              alt="Image arrow button"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </BlockContainer>
    </section>
  );
};

export default index;
