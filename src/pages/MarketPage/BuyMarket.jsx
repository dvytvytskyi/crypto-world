import React from "react";
import WidthContainer from "../../components/UI/WidthContainer";
import Blocks__MarketP__BuyMarket from "./Sections/Blocks__MarketP/Blocks__MarketP__BuyMarket";
import Filter__MarketP from "./Sections/Filter__MarketP";
import Table__MarketP from "./Sections/Table__MarketP";
import Opportunities__MarketP from "./Sections/Opportunities__MarketP";
import { useEffect } from "react";
const BuyMarket = () => {
  useEffect(() => {
    document.title = "Buy Market";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Buy Market Descr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Buy Market");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Buy Market Descr");
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <WidthContainer>
        <Blocks__MarketP__BuyMarket />
        {/* <Filter__MarketP /> */}
        <Table__MarketP />
        <Opportunities__MarketP />
      </WidthContainer>
    </main>
  );
};

export default BuyMarket;
