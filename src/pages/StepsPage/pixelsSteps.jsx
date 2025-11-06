import React, { useState, useEffect } from "react";
import WidthContainer from "../../components/UI/WidthContainer";
import Steps__StepsP from "./Sections/Steps__StepsP";
import BlocksMap__StepsP from "./Sections/BlocksMap__StepsP";
import Header__StepsP from "./Sections/Header__StepsP";
import Map__StepsP from "./Sections/PopUp__StepsP";
import Form__StepsP from "./Sections/Form__StepsP";
import InfoBlocks__StepsP from "./Sections/InfoBlocks__StepsP";
import PopUp__StepsP from "./Sections/PopUp__StepsP";
import "./pixelsSteps.scss";

const pixelsSteps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPixels, setSelectedPixels] = useState([]);
  const [pixelsType, setPixelsType] = useState("Single");
  const [countryDominance, setCountryDominance] = useState([]);

  const [companyData, setCompanyData] = useState({
    id: "",
    logo: "",
    name: "",
    wLink: "",
    descr: "",
  });
  function handleSetLogo(e) {
    setCompanyData({ ...companyData, logo: e });
  }
  function handleSetName(e) {
    setCompanyData({ ...companyData, name: e.target.value });
  }
  function handleSetWLink(e) {
    setCompanyData({ ...companyData, wLink: e.target.value });
  }
  function handleSetDescr(e) {
    setCompanyData({ ...companyData, descr: e.target.value });
  }
  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    document.title = "Purchase Pixels";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Purchase Descr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Purchase");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Purchase Descr");
    window.scrollTo(0, 0);

    // Блокуємо скрол на body
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Відновлюємо скрол при виході зі сторінки
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);
  return (
    <main className="buyPixelsPage">
      {activeStep === 1 && (
        <WidthContainer>
          <Header__StepsP title="Become the owner" descr={true} />
          <Steps__StepsP
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <BlocksMap__StepsP
            setActiveStep={setActiveStep}
            selectedPixels={selectedPixels}
            setSelectedPixels={setSelectedPixels}
            setShowPopUp={setShowPopUp}
            pixelsType={pixelsType}
            countryDominance={countryDominance}
            setCountryDominance={setCountryDominance}
          />
        </WidthContainer>
      )}
      {activeStep === 2 && (
        <WidthContainer>
          <Header__StepsP title="Become the owner" descr={true} />
          <Steps__StepsP
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <Form__StepsP
            setActiveStep={setActiveStep}
            pixelsNumber={selectedPixels.length}
            countries={countryDominance}
            companyData={companyData}
            selectedCompany={companyData.id}
            setSelectedCompany={setCompanyData}
            handleSetWLink={handleSetWLink}
            handleSetDescr={handleSetDescr}
            handleSetLogo={handleSetLogo}
            handleSetName={handleSetName}
          />
        </WidthContainer>
      )}
      {activeStep === 3 && (
        <WidthContainer>
          <Header__StepsP title="Become the owner" descr={true} />
          <Steps__StepsP
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
          <InfoBlocks__StepsP
            setActiveStep={setActiveStep}
            pixelsNumber={selectedPixels.length}
            countries={countryDominance}
            companyData={companyData}
            selectedPixels={selectedPixels}
            pixelType={pixelsType}
            icon={companyData.logo}
          />
        </WidthContainer>
      )}
      <PopUp__StepsP
        isVisible={showPopUp}
        handlerClose={setShowPopUp}
        selectedPixels={selectedPixels}
        setSelectedPixels={setSelectedPixels}
        pixelsType={pixelsType}
        setPixelsType={setPixelsType}
      />
    </main>
  );
};

export default pixelsSteps;
