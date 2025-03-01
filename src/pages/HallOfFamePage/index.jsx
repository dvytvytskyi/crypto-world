import React from "react";
import WidthContainer from "../../components/UI/WidthContainer";
import RunningLine from "../../components/RunningLine";
import LaunchUrPrjct from "../../components/LaunchUrPrjct";
import ArtBlocks__HallOfFameP from "./Sections/ArtBlocks__HallOfFameP";
import Continents__HallOfFameP from "./Sections/Continents__HallOfFameP";
import Table__HallOfFameP from "./Sections/Table__HallOfFameP";
import "./hallOfFamePage.scss";

import { useEffect } from "react";

const index = () => {
  useEffect(() => {
    document.title = "Hall of Fame";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Hall of Fame Descr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Hall of Fame");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Hall of Fame Descr");
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="hallOfFame">
      <ArtBlocks__HallOfFameP />
      <div className="big_art"></div>
      <RunningLine />
      <WidthContainer>
        <Table__HallOfFameP />
        <Continents__HallOfFameP />
      </WidthContainer>
      <LaunchUrPrjct />
    </main>
  );
};

export default index;
