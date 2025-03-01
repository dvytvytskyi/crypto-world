import BlockContainer from "../../components/UI/BlockContainer";
import "./blockStats.scss";

const BlockStats = () => {
  return (
    <section className="blockStats">
      <BlockContainer className="blockContainer--purple">
        <h2>401K+</h2>
        <p>Pixels</p>
        <div className="blockStats__imgPlaneBox">
          <img
            src="/assets/Global/plane.webp"
            alt="gls"
            width={255}
            height={250}
            className="blockStats__imgPlane"
          />
        </div>
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <h2>161</h2>
        <p>Countries</p>
        <div className="blockStats__imgCntryBox">
          <img
            src="/assets/components/BlockStats/cntry.png"
            alt="cntry"
            width={295}
            height={175}
            className="blockStats__imgCntry"
          />
        </div>
        <div className="blockStats__imgCntry2Box">
          <img
            src="/assets/components/BlockStats/cntry2.png"
            alt="cntry2"
            width={502}
            height={329}
            className="blockStats__imgCntry2"
          />
        </div>
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <h2>6</h2>
        <p>Continents</p>
        <div className="blockStats__imgPlanetBox">
          <img
            src="/assets/components/BlockStats/planet.png"
            alt="planet"
            width={184}
            height={184}
            className="blockStats__imgPlanet"
          />
        </div>
        <div className="blockStats__purpShadowBox">
          {" "}
          <div className="blockStats__purpShadow"></div>
        </div>
      </BlockContainer>
    </section>
  );
};

export default BlockStats;
