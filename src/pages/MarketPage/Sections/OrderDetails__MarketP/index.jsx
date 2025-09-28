import "./orderDetails__MarketP.scss";

import BlockContainer from "../../../../components/UI/BlockContainer";
import PurchasedPrice from "../../../../components/StepsPComponents/PurchasedPrice";
import InputInfo from "../../../../components/StepsPComponents/InputInfo";
import RadioInput from "../../../../components/StepsPComponents/RadioInput";
import Button from "../../../../components/UI/Button";
export default function OrderDetails__MarketP() {
  return (
    <section className="orderDetailsMarketP">
      <BlockContainer className="blockContainer--grey">
        <h3>Order for Sale</h3>
        <div className="orderDetailsMarketP__propertyBox">
          <BlockContainer className="blockContainer--grey">
            <span>
              <h4>100 x 100 pixels</h4>
              <p>Size</p>
            </span>
            <img
              src="/assets/UI/resize.svg"
              alt="resizeIcon"
              width={36}
              height={36}
            />
          </BlockContainer>
          <BlockContainer className="blockContainer--grey">
            <span>
              <h4>12,500</h4>
              <p>Amount of pixels</p>
            </span>
            <img
              src="/assets/UI/pixels.svg"
              alt="pixelsIcon"
              width={36}
              height={36}
            />
          </BlockContainer>
          <BlockContainer className="blockContainer--grey">
            <span>
              <h4>30 October 2023</h4>
              <p>Purchased Date</p>
            </span>
            <img
              src="/assets/UI/date.svg"
              alt="dateIcon"
              width={36}
              height={36}
            />
          </BlockContainer>
          <PurchasedPrice />
        </div>
        <PurchasedPrice />
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <h3>Enter Details</h3>
        <BlockContainer className="blockContainer--grey">
          <h5 className="steps__blockMap-title">Select currency</h5>
          <div className="steps__blockMap-inputAndSelect">
            <RadioInput>
              <div className="steps__blockMap-currency">
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
              <div className="steps__blockMap-currency">
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
        <div className="orderDetailsMarketP__inputsBox">
          <InputInfo descr="1000 pixels" img="/assets/UI/person.png">
            <span className="orderDetailsMarketP__inputText">
              Ammount
              <span>
                +27,4%
                <img
                  src="/assets/UI/question.svg"
                  alt="questionIcon"
                  width={20}
                  height={20}
                />
              </span>
            </span>
          </InputInfo>
          <InputInfo descr="124000 USDT" img="/assets/UI/walletInput.svg">
            <span className="orderDetailsMarketP__inputText">
              Total price
              <span>
                <img
                  src="/assets/UI/usdt.svg"
                  alt="usdtnIcon"
                  width={20}
                  height={20}
                />
                USDT
                <img
                  src="/assets/UI/question.svg"
                  alt="questionIcon"
                  width={20}
                  height={20}
                />
              </span>
            </span>
          </InputInfo>
        </div>
        <Button className="button--purple">
          Place on Market
          <img
            src="/assets/UI/btnArrowSlim.svg"
            alt="btnArrowSlim"
            width={24}
            height={24}
          />
        </Button>
      </BlockContainer>
    </section>
  );
}
