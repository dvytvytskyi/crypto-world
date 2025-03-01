import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import RadioInput from "../../../../components/StepsPComponents/RadioInput";
import Button from "../../../../components/UI/Button";
import "./countryBlocks__StepsP.scss";

const index = ({ setActiveStep }) => {
  return (
    <section className="countryBlocks__blocks">
      <BlockContainer className="blockContainer--grey">
        <img
          src="/assets/MainPage/worldMap.svg"
          alt="Image map"
          className="countryBlocks__blocks-img"
          width={632}
          height={308}
        />
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <div className="countryBlocks__blocks-blocks">
          <div className="countryBlocks__blocks-info">
            <BlockContainer className="blockContainer--grey">
              <h5>100 x 100 pixels</h5>
              <span className="countryBlocks__blocks-descr">Size</span>
            </BlockContainer>
            <BlockContainer className="blockContainer--grey">
              <h5>12,500</h5>
              <span className="countryBlocks__blocks-descr">
                Number of pixels selected
              </span>
            </BlockContainer>
          </div>
          <div className="countryBlocks__blocks-infoBlocks">
            <BlockContainer className="blockContainer--grey">
              <h5>Countries dominance</h5>
              <div className="countryBlocks__blocks-countries dominance">
                <span>
                  <div className="countryBlocks__blocks-text">World 0.025%</div>
                </span>
                <span>
                  <div className="countryBlocks__blocks-text">Europe 7.5%</div>
                </span>
              </div>
            </BlockContainer>
            <BlockContainer className="blockContainer--grey">
              <h5 className="countryBlocks__blocks-title">Select currency</h5>
              <div className="countryBlocks__blocks-inputAndSelect">
                <RadioInput>
                  <div className="countryBlocks__blocks-currency">
                    <img
                      src="/assets/UI/bcoin.svg"
                      alt="Currency picture"
                      width={20}
                      height={20}
                    />
                    <span>BTC</span>
                    <span>0,0065</span>
                  </div>
                </RadioInput>
                <RadioInput>
                  <div className="countryBlocks__blocks-currency">
                    <img
                      src="/assets/UI/usdt.svg"
                      alt="Currency picture"
                      width={20}
                      height={20}
                    />
                    <span>USDT</span>
                    <span>352,52</span>
                  </div>
                </RadioInput>
              </div>
            </BlockContainer>
          </div>
        </div>
        <div className="countryBlocks__blocks-textButtons">
          <div className="countryBlocks__blocks-button">
            <Button className="button--grey" handler={() => setActiveStep(1)}>
              <img
                src="/assets/UI/btnArrowSlim.svg"
                alt="Image arrow button"
                className="countryBlocks__blocks-imgReverse"
                width={24}
                height={24}
              />
              Back{" "}
            </Button>
            <Button className="button--purple" handler={() => setActiveStep(2)}>
              Next Step{" "}
              <img
                src="/assets/UI/btnArrowSlim.svg"
                alt="Image arrow button"
                width={24}
                height={24}
              />
            </Button>
          </div>
          <span className="countryBlocks__blocks-textFooter">
            Minimum purchase 10x10 pixel
          </span>
        </div>
      </BlockContainer>
    </section>
  );
};

export default index;
