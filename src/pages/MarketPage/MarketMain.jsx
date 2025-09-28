import { useEffect, useState } from "react";
import WidthContainer from "../../components/UI/WidthContainer";
import Block__MarketP_MarketMainP from "./Sections/Blocks__MarketP/Block__MarketP_MarketMainP";
import Table__Market from "./Sections/Table__MarketP";
import Opportunities__MarketP from "./Sections/Opportunities__MarketP";
import Transactions from "../StatisticsPage/Sections/Table__StatisticsP";
import Popup__MarketP from "./Sections/Popup__MarketP";

export default function MarketMain() {
  const [popUpData, setPopUpData] = useState({ pixels: "", icon: "" });
  const [popUpShow, setPopUpShow] = useState(false);

  useEffect(() => {
    document.title = "Market";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "MarketDescr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Market");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Market Descr");
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <WidthContainer>
        <Block__MarketP_MarketMainP />
        <Table__Market
          setPopupShow={setPopUpShow}
          setPopUpData={setPopUpData}
        />
        <Opportunities__MarketP mainP />
        <Transactions />
      </WidthContainer>
      <Popup__MarketP
        handler={setPopUpShow}
        isVisible={popUpShow}
        pixels={popUpData.pixels}
        icon={popUpData.icon}
      />
    </main>
  );
}
