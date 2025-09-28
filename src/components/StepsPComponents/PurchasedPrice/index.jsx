import React from "react";
import BlockContainer from "../../UI/BlockContainer";
import "./purchasedPrice.scss";

const index = () => {
  return (
    <BlockContainer className="blockContainer--purple">
      <div className="purchasedPrice-priceInfo">
        <div className="purchasedPrice-imgBg">
          <img
            src="/assets/UI/usdt.svg"
            alt="Usdt image"
            width={23.65}
            height={20.57}
          />
        </div>
        <div className="purchasedPrice-texts">
          <h4>USDT 352,52</h4>
          <span>Purchased Price</span>
        </div>
      </div>
    </BlockContainer>
  );
};

export default index;
