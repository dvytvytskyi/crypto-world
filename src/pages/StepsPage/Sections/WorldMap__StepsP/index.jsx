import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import "./worldMap__StepsP.scss";

const index = () => {
  return (
    <section className="steps__worldMap">
      <BlockContainer className="blockContainer--grey">
        <img
          src="/assets/MainPage/worldMap.svg"
          alt="Image map"
          className="steps__worldMap-img"
        />
      </BlockContainer>
    </section>
  );
};

export default index;
