import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import "./headerArtwork__StepsP.scss";

const index = () => {
  return (
    <section className="steps__headerArtwork-blocks">
      <BlockContainer>
        <h1 className="steps__headerArtwork-title">Purchase Cyprus</h1>
        <h4 className="steps__headerArtwork-descr">
          Become the <span>owner</span> of Cyprus in <span>3 steps</span>
        </h4>
      </BlockContainer>
      <BlockContainer className="blockContainer--artwork">
        <h2>Artwork</h2>
      </BlockContainer>
    </section>
  );
};

export default index;
