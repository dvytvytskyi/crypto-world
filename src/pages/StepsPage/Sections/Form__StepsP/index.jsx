import isUrl from 'is-url';
import React, { useState, useMemo } from "react";
import Button from "../../../../components/UI/Button";
import BlockContainer from "../../../../components/UI/BlockContainer";
import InputInfo from "../../../../components/StepsPComponents/InputInfo";
import { useSelector } from "react-redux";
import BlocksInfo from "../../../../components/StepsPComponents/BlocksInfo";
import PurchasedPrice from "../../../../components/StepsPComponents/PurchasedPrice";
import FileUpload from "../../../../components/FileUploader";

import "./form__StepsP.scss";

const index = ({
  setActiveStep,
  companyData,
  setCompanyData,
  pixelsNumber,
  countries,
  selectedCompany,
  setSelectedCompany,
  handleSetWLink,
  handleSetDescr,
  handleSetLogo,
  handleSetName,
}) => {
  const userCompanies = useSelector((state) => state.user.user.companies);
  const [createOrExistingComp, setCreateOrExistingComp] = useState("");
  const [searchCompany, setSearchCompany] = useState("");

  const filteredCompanies = useMemo(() => {
    return userCompanies.filter((item) =>
      item.name.toLowerCase().includes(searchCompany.toLocaleLowerCase())
    );
  }, [searchCompany]);

  const handleSetSearchInput = (e) => {
    setSearchCompany(e.target.value);
  };

  let firstBlock;
  if (createOrExistingComp === "create" || !userCompanies.length)
    firstBlock = (
      <>
        <FileUpload accept=".png, ,.jpeg, .jpg" setFile={handleSetLogo}>
          <InputInfo
            title="Logo"
            descr="Upload your image"
            type="text"
            width={21.5}
            height={21.5}
            img="/assets/UI/scenery.png"
            value={companyData.logo.name}
          />
        </FileUpload>
        <InputInfo
          title="Name"
          descr="Your name"
          type="text"
          width={24}
          height={24}
          img="/assets/UI/person.png"
          value={companyData.name}
          setValue={handleSetName}
        />
        <InputInfo
          title="Website link"
          descr="Your website link"
          type="text"
          width={24}
          height={24}
          img="/assets/UI/link.png"
          value={companyData.wLink}
          setValue={handleSetWLink}
        />
        <InputInfo
          title="Description"
          descr="Description"
          type="text"
          width={24}
          height={24}
          img="/assets/UI/pen.png"
          value={companyData.descr}
          setValue={handleSetDescr}
        />
        <Button
          className="button--purple"
          handler={() => {
            setCreateOrExistingComp("");
            setSelectedCompany({
              id: "",
              logo: "",
              name: "",
              wLink: "",
              descr: "",
            });
          }}
        >
          Back To Choose
        </Button>
      </>
    );
  else if (createOrExistingComp === "exisiting")
    firstBlock = (
      <>
        <div className="steps__companyList">
          <InputInfo
            title="Select company list"
            descr="Search your Company"
            type="text"
            width={21.5}
            height={21.5}
            img="/assets/UI/search.svg"
            value={searchCompany}
            setValue={handleSetSearchInput}
          />
          <div className="steps__companyListContent">
            {filteredCompanies.map((item, index) => (
              <CompanyInListTtem
                key={index}
                id={item.id}
                descr={item.descr}
                wLink={item.wLink}
                name={item.name}
                icon={item.icon}
                totalPixels={item.pixels}
                selected={selectedCompany === item.id}
                handlSelectCompany={setSelectedCompany}
              />
            ))}
          </div>
        </div>
        <Button
          className="button--purple"
          handler={() => {
            setCreateOrExistingComp("");
            setSelectedCompany({
              id: "",
              logo: "",
              name: "",
              wLink: "",
              descr: "",
            });
          }}
        >
          Back To Choose
        </Button>
      </>
    );
  else
    firstBlock = (
      <div className="steps__formChooseBox">
        <img
          src="/assets/Global/cube.webp"
          alt="cube"
          className="steps__formImgCube"
          width={247}
          height={260}
        />
        <Button
          className="button--purple"
          handler={() => setCreateOrExistingComp("create")}
        >
          Create new company{" "}
          <img
            src="/assets/UI/btnArrowSlim.svg"
            alt="btnArrow"
            width={24}
            height={24}
          />
        </Button>
        <Button
          className="button--gradientBorder"
          handler={() => setCreateOrExistingComp("exisiting")}
        >
          Use existing company
        </Button>
        <img
          src="/assets/Global/bublik.webp"
          alt="bublik"
          className="steps__formImgBublik"
          width={311}
          height={321}
        />
      </div>
    );
  return (
    <section className="steps__form">
      <BlockContainer className="blockContainer--grey">
        {firstBlock}
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <div>
          <div className="steps__form-price">
            <PurchasedPrice />
          </div>
          <BlocksInfo pixelsNumber={pixelsNumber} countries={countries} />
        </div>
        <div className="steps__form-button">
          <Button className="button--grey" handler={() => setActiveStep(1)}>
            <img
              src="/assets/UI/btnArrowSlim.svg"
              alt="Image arrow button"
              className="steps__form-imgReverse"
              width={24}
              height={24}
            />
            Back{" "}
          </Button>
          
          <Button
            className={`button--${
              companyData.logo &&
              companyData.name &&
              isUrl(companyData.wLink)&&
              companyData.descr
                ? "purple"
                : "gradientBorder"
            }`}
            handler={() => {
              if (
                companyData.logo &&
                companyData.name &&
                isUrl(companyData.wLink) &&
                companyData.descr
              )
                setActiveStep(3);
            }}
          >
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

function CompanyInListTtem({
  name,
  totalPixels,
  icon,
  selected,
  descr,
  wLink,
  id,
  handlSelectCompany,
}) {
  return (
    <div
      className={`steps__companyInListItem ${
        selected && "steps__companyInListItem--selected"
      }`}
      onClick={() =>
        handlSelectCompany({
          id: id,
          logo: icon,
          name: name,
          wLink: wLink,
          descr: descr,
        })
      }
    >
      <span>{name}</span>
      <span className="steps__companyInListItemRight">
        <span className="steps__companyInListItemText">
          Pixels: <span>{totalPixels}px</span>
        </span>
        <img src={icon} alt="companyIcon" height={46} width={46} />
      </span>
    </div>
  );
}
