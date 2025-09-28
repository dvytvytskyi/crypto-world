import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import BlocksInfo from "../../../../components/StepsPComponents/BlocksInfo";
import PurchasedPrice from "../../../../components/StepsPComponents/PurchasedPrice";
import Button from "../../../../components/UI/Button";
import "./infoCountry__StepsP.scss";

const index = ({ setActiveStep }) => {
  return (
    <section className="infoCountry__blocks">
      <BlockContainer className="blockContainer--grey">
        <BlocksInfo />
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <div className="infoCountry__blocks-blocks">
          <BlockContainer className="blockContainer--grey">
            <div className="infoCountry__blocks-company">
              <img
                src="/assets/tempImgs/Trident.png"
                alt="Trident image"
                width={36}
                height={36}
              />
              <div className="infoCountry__blocks-texts one">
                <h5>Trident</h5>
                <span>Name</span>
              </div>
            </div>
          </BlockContainer>
          <BlockContainer className="blockContainer--grey">
            <div className="infoCountry__blocks-texts two">
              <h5>tridentproperties.com</h5>
              <span>Website Link</span>
            </div>
          </BlockContainer>
          <BlockContainer className="blockContainer--grey">
            <div className="infoCountry__blocks-texts three">
              <h5>Description</h5>
              <span>Best Real Estate in Dubai for Amazing Price</span>
            </div>
          </BlockContainer>
          <BlockContainer className="blockContainer--grey">
            <div className="infoCountry__blocks-texts three">
              <h5>Description appearance</h5>
              <span>
                Displayed{" "}
                <img src="/assets/StepsPage/info.png" alt="Info image" />
              </span>
            </div>
          </BlockContainer>
        </div>
        <div className="infoCountry__blocks-purchasedPrice">
          <PurchasedPrice />
        </div>
        <div className="infoCountry__blocks-button">
          <Button className="button--grey" handler={() => setActiveStep(2)}>
            <img
              src="/assets/UI/btnArrowSlim.svg"
              alt="Image arrow button"
              className="infoCountry__blocks-imgReverse"
            />
            Back{" "}
          </Button>
          <Button className="button--purple">
            Purchase{" "}
            <img
              src="/assets/StepsPage/success.png"
              alt="Image success form"
              width={20}
              height={20}
            />
          </Button>
        </div>
      </BlockContainer>
    </section>
  );
};

export default index;
