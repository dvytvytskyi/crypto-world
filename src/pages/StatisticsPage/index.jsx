import WidthContainer from "../../components/UI/WidthContainer";
import RunningLine from "../../components/RunningLine";
import Continents from "../../components/Continents";
import SectionHeader from "../../components/SectionHeader";
import BlockStats from "../../components/BlockStats";
import Diagrams__StatisticsP from "./Sections/Diagrams__StatisticsP";
import Blocks__StatisticsP from "./Sections/Blocks__StatisticsP";
import Table__StatisticsP from "./Sections/Table__StatisticsP";
import { useEffect } from "react";
import "./statisticsPage.scss";

const StatisticsPage = () => {
  useEffect(() => {
    document.title = "Statistics";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Statistics Descr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Statistics");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Statistics Descr");
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <WidthContainer>
        <Diagrams__StatisticsP />
      </WidthContainer>
      <RunningLine />
      <WidthContainer>
        <Blocks__StatisticsP />
        <SectionHeader title="Continents" />
        <section className="statistickPage__continents">
          <Continents />
        </section>
        <BlockStats />
        <Table__StatisticsP />
      </WidthContainer>
    </main>
  );
};

export default StatisticsPage;
