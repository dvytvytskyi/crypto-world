import React, { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import BlockContainer from "../UI/BlockContainer";
import * as d3 from "d3";
import worldMap from "../../mapData/worldMap.json";
import "./Continents.scss";
import BlockStats from "../BlockStats";

const index = () => {
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 660) {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  }, [windowWidth]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="statistics__continent">
      <div>
        <ul className="statistics__continent-list">
          <li className="statistics__item-small">
            <BlockContainer className="blockContainer--artwork1">
              <img src="/assets/StatisticsPage/st1.png" alt="" />
            </BlockContainer>
          </li>
          <CountinentItem
            countinent="66040f95b5248a56de50d5c8"
            countinentName="South America"
          />
          <CountinentItem
            countinent="66040f51b5248a56de50d5c5"
            countinentName="Europe"
          />
          {showAll && (
            <>
              <CountinentItem
                countinent="66040f7fb5248a56de50d5c7"
                countinentName="North America"
              />
              <CountinentItem
                countinent="66040fa9b5248a56de50d5c9"
                countinentName="Africa"
              />
              <li className="statistics__item-small">
                <BlockContainer className="blockContainer--artwork3">
                  <img src="/assets/StatisticsPage/st2.png" alt="" />
                </BlockContainer>
              </li>
              <li className="statistics__item-small">
                <BlockContainer className="blockContainer--artwork2">
                  <img src="/assets/StatisticsPage/st3.png" alt="" />
                </BlockContainer>
              </li>
              <CountinentItem
                countinent="66040f66b5248a56de50d5c6"
                countinentName="Asia"
              />
              <CountinentItem
                countinent="66040fbab5248a56de50d5ca"
                countinentName="Australia & Oceania"
              />
            </>
          )}
        </ul>
        {windowWidth <= 660 && (
          <div className="statistics__item-buttonShow">
            <Button className="button--blurGrey" handler={toggleShowAll}>
              {showAll ? (
                <div>
                  <span>Hide</span>{" "}
                  <img
                    src="/assets/UI/btnArrowSlim.svg"
                    alt="Image arrow"
                    width={24}
                    height={24}
                    className="statistics__item-imgHide"
                  />
                </div>
              ) : (
                <div>
                  <span>Show more</span>
                  <img
                    src="/assets/UI/btnArrowSlim.svg"
                    alt="Image arrow"
                    width={24}
                    height={24}
                    className="statistics__item-imgShowMore"
                  />
                </div>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;

function CountinentItem({ countinent, countinentName }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const currentCountinent = worldMap.features.filter(
      (item) => item.properties.continent_id === countinent
    );

    const union = {
      type: "FeatureCollection",
      features: [...currentCountinent],
    };

    const projection = d3.geoMercator().fitSize([width, height], union);

    const path = d3.geoPath().projection(projection).context(context);
    context.clearRect(0, 0, width, height);
    context.beginPath();
    path(union);

    context.fillStyle = "#A255FB";

    context.fill();
    context.stroke();

    context.restore();

    return () => {
      d3.select(canvas).on(".zoom", null);
    };
  }, []);

  return (
    <li className="statistics__item-continent">
      <BlockContainer className="blockContainer--grey">
        <canvas
          ref={canvasRef}
          width={450}
          height={450}
          className="statistics__item-img"
        />
        <div className="statistics__item-content">
          <div className="statistics__item-info">
            <div className="statistics__item-button">
              <Button className="button--blurGrey">
                View
                <img
                  src="/assets/UI/btnArrow.svg"
                  alt="Button arrow"
                  width={16}
                  height={15.56}
                />
              </Button>
            </div>
            <div>
              <h3 className="statistics__item-title new">{countinentName}</h3>
            </div>
          </div>
          <div className="statistics__item-form">
            <div className="statistics__form-logos">
              <img
                src="/assets/tempImgs/Tesla.png"
                alt="Phone logo"
                width={36}
                height={36}
              />
              <span className="statistics__form-subtitle">Tesla</span>
            </div>
            <ul className="statistics__form-list">
              <li className="statistics__form-item">
                <span className="statistics__form-title">8,525</span>
                <span className="statistics__form-descr">Pixels owned</span>
              </li>
              <li className="statistics__form-item">
                <span className="statistics__form-title">8%</span>
                <span className="statistics__form-descr">
                  Continents Dominance
                </span>
              </li>
              <li className="statistics__form-item">
                <span className="statistics__form-title">0.02%</span>
                <span className="statistics__form-descr">Worlds Dominance</span>
              </li>
            </ul>
          </div>
        </div>
      </BlockContainer>
    </li>
  );
}
