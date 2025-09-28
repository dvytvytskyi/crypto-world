import ArtBlock from "../../components/ArtBlock";
import WidthContainer from "../../components/UI/WidthContainer";
import BlockContainer from "../../components/UI/BlockContainer";
import DataCountry__ContriesP from "./Sections/DataCountry__ContriesP";
import { useEffect } from "react";

export default function BuyWholeCountryP() {
  useEffect(() => {
    document.title = "All Countries";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Buy Country Descr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Buy Country");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Buy Country Descr");
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <WidthContainer>
        <ArtBlock title={"Select Country"}>
          <div className="big_art"></div>
        </ArtBlock>
        <DataCountry__ContriesP />
      </WidthContainer>
    </main>
  );
}
