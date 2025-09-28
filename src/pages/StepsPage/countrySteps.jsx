import React, { useState } from "react";
import Header__StepsP from "./Sections/Header__StepsP";
import WidthContainer from "../../components/UI/WidthContainer";
import CountryBlocks__StepsP from "./Sections/CountryBlocks__StepsP";
import Steps__StepsP from "./Sections/Steps__StepsP";
import WorldMap__StepsP from "./Sections/WorldMap__StepsP";
import FormCountry__StepsP from "./Sections/FormCountry__StepsP";
import InfoCountry__StepsP from "./Sections/InfoCountry__StepsP";
import { useEffect } from "react";

const countrySteps = () => {
  const [activeStep, setActiveStep] = useState(1);
  useEffect(() => {
    document.title = "Purchase Pixels";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Purchase Pixels Descr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Purchase Pixels");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Purchase Pixels Descr");
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      {activeStep === 1 && (
        <WidthContainer>
          <Header__StepsP title="Become the owner" descr={true} />
          <Steps__StepsP
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <CountryBlocks__StepsP setActiveStep={setActiveStep} />
        </WidthContainer>
      )}
      {activeStep === 2 && (
        <WidthContainer>
          <Header__StepsP title="Become the owner" descr={false} />
          <Steps__StepsP
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <WorldMap__StepsP />
          <FormCountry__StepsP setActiveStep={setActiveStep} />
        </WidthContainer>
      )}
      {activeStep === 3 && (
        <WidthContainer>
          <Header__StepsP title="Become the owner" descr={false} />
          <Steps__StepsP
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <WorldMap__StepsP />
          <InfoCountry__StepsP setActiveStep={setActiveStep} />
        </WidthContainer>
      )}
    </main>
  );
};

export default countrySteps;
