import React from "react";
import Continents from "../../../../components/Continents";
import "./Continents__HallOfFameP.scss";

const index = () => {
  return (
    <section className="hallOfFame__continents">
      <h2 className="hallOfFame__continents-title">WOC Continent Leaders</h2>
      <Continents />
    </section>
  );
};

export default index;
