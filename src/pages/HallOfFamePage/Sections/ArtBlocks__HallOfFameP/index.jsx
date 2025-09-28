import React from "react";
import ArtBlock from "../../../../components/ArtBlock";
import BlockContainer from "../../../../components/UI/BlockContainer";
import "./ArtBlocks__HallOfFameP.scss";

const index = () => {
  return (
    <section className="hallOfFame__artBlocks">
      <ArtBlock title={"Hall of Fame"} top={64} bottom={48}>
        <div className="big_art"></div>
      </ArtBlock>
    </section>
  );
};

export default index;
