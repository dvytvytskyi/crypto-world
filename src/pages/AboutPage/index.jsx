import WidthContainer from "../../components/UI/WidthContainer";
import LaunchUrPrjct from "../../components/LaunchUrPrjct";
import BlockStats from "../../components/BlockStats";
import Title__AboutP from "./Sections/Title__AboutP";
import MissionValues__About from "./Sections/MissionValues__AboutP";
import LandDistr__AboutP from "./Sections/LandDistr__AboutP";
import CryptoOppor__AboutP from "./Sections/CryptoOppor__AboutP";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "About Descr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "About");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "About Descr");
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="aboutPage">
      <WidthContainer>
        <Title__AboutP />
        <MissionValues__About />
        <BlockStats />
      </WidthContainer>
      <LandDistr__AboutP />

      <LaunchUrPrjct />
    </main>
  );
}
