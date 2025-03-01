import CryptoOppor__AboutP from "../AboutPage/Sections/CryptoOppor__AboutP";
import LaunchUrPrjct from "../../components/LaunchUrPrjct";
import WidthContainer from "../../components/UI/WidthContainer";
import Title__BegginersGPage from "./Sections/Title__BegginersGPage";
import HowToBuy__BegginersGPage from "./Sections/HowToBuy__BegginersGPage";
import ViewTheWorld__BegginersGP from "./Sections/ViewTheWorld__BegginersGP";
import { useEffect } from "react";

export default function BegginersGPage() {
  useEffect(() => {
    document.title = "Begginers Guide";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Begginers Descr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Begginers");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Begginers Descr");
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="begginersGPage">
      <WidthContainer>
        <Title__BegginersGPage />
        <HowToBuy__BegginersGPage />
        <ViewTheWorld__BegginersGP />
        <CryptoOppor__AboutP />
      </WidthContainer>
      <LaunchUrPrjct />
    </main>
  );
}
