import "./landDistr__aboutP.scss";

import BlockContainer from "../../../../components/UI/BlockContainer";
import WidthContainer from "../../../../components/UI/WidthContainer";
import DoughnutDiagram from "../../../../components/DoughnutDiagram";
import { data } from "./diagramSettings/settings";

export default function LandDistr__AboutP() {
  return (
    <section className="landDisrt">
      <WidthContainer>
        <h2 className="landDisrt__title">Land distribution</h2>
        <p className="landDisrt__text">
          is to provide the necessary assistance and support to the visitors of
          our website. We aim to create a convenient and informative platform
          where everyone can find help in various areas of life.
        </p>
        <div className="landDisrt__diagramBox">
          <BlockContainer className="blockContainer--purple">
            <DoughnutDiagram data={data} />
          </BlockContainer>
          <BlockContainer className="blockContainer--grey">
            <span>
              <h3 className="totalArea__title">Total area</h3>
              <p className="totalArea__text">401,865</p>
            </span>
            <div className="totalArea__content">
              <TotalAreaItem name={"Australia"} percent={15} />
              <TotalAreaItem name={"North America"} percent={20} />
              <TotalAreaItem name={"South America"} percent={20} />
              <TotalAreaItem name={"Europe"} percent={10} />
              <TotalAreaItem name={"Asia"} percent={25} />
            </div>
          </BlockContainer>
        </div>
      </WidthContainer>
      <div className="landDisrt__map">
        <img
          src="/assets/AboutPage/map.webp"
          alt="map"
          className="map__img"
          width={1440}
          height={1092}
        />
        <div className="map__nAmerica">
          <BlockContainer className="blockContainer--map__AboutP">
            <h4 className="map__title">8%</h4>
            <p className="map__text">North america</p>
          </BlockContainer>
        </div>
        <div className="map__europe">
          <BlockContainer className="blockContainer--map__AboutP">
            <h4 className="map__title">53%</h4>
            <p className="map__text">Europe</p>
          </BlockContainer>
        </div>
        <div className="map__asia">
          <BlockContainer className="blockContainer--map__AboutP">
            <h4 className="map__title">6%</h4>
            <p className="map__text">Asia</p>
          </BlockContainer>
        </div>
        <div className="map__sAmerica">
          <BlockContainer className="blockContainer--map__AboutP">
            <h4 className="map__title">44%</h4>
            <p className="map__text">South america</p>
          </BlockContainer>
        </div>
        <div className="map__africa">
          <BlockContainer className="blockContainer--map__AboutP">
            <h4 className="map__title">36%</h4>
            <p className="map__text">Africa</p>
          </BlockContainer>
        </div>
        <div className="map__ocenia">
          <BlockContainer className="blockContainer--map__AboutP">
            <h4 className="map__title">12%</h4>
            <p className="map__text">Ocenia</p>
          </BlockContainer>
        </div>
      </div>
    </section>
  );
}

function TotalAreaItem({ percent, name }) {
  return (
    <BlockContainer className="blockContainer--grey">
      <span className="totalAreaItem__content">
        <div className="totalAreaItem__color" data-name={name}></div>
        <h5 className="totalAreaItem__title">{name}</h5>
      </span>
      {percent}%
    </BlockContainer>
  );
}
