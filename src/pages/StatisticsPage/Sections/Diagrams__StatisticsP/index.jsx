import React, { useEffect, useState } from "react";
import ArtBlock from "../../../../components/ArtBlock";
import BlockContainer from "../../../../components/UI/BlockContainer";
import Button from "../../../../components/UI/Button";
import CirculDiagram from "../../../../components/CirculDiagram";
import { useGetStatsForWorldQuery } from "../../../../store/query/analyticsApi/analyticsWorldAPI";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import "./Diagrams__StatisticsP.scss";
import { Link } from "react-router-dom";

const index = () => {
  const simulatedData = {
    percentageSold: 75.3,
    soldPixels: 100000,
    remainingPixels: 30000,
    totalPixels: 130000,
  };

  const [data, setData] = useState(simulatedData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="statistickPage__diagrams">
      <ArtBlock title={"Statistics"} top={64}>
        <div className="statistickPage__diagrams-blocks">
          {isLoading ? (
            <div className="statistickPage__diagrams-loader">
              <SkeletonLoading height={208} />
              <SkeletonLoading height={208} />
            </div>
          ) : (
            <>
              <BlockContainer className="blockContainer--purple">
                <div className="statistickPage__diagramsList">
                  <div className="statistickPage__diagrams-lineList">
                    <div className="statistickPage__diagrams-lineItem flat">
                      <div className="statistickPage__diagrams-lineCircleFlat"></div>
                      <img
                        src="/assets/StatisticsPage/line1.png"
                        alt="Line"
                        className="statistickPage__diagrams-lineImg flat"
                        height={1}
                        width={133}
                      />
                    </div>
                    <div className="statistickPage__diagrams-lineItem curve">
                      <div className="statistickPage__diagrams-lineCircle"></div>
                      <img
                        src="/assets/StatisticsPage/line2.svg"
                        alt="Line"
                        className="statistickPage__diagrams-lineImg curve"
                        width={53}
                        height={33}
                      />
                    </div>
                  </div>
                  <div className="statistickPage__diagrams-diagram">
                    <div className="statistickPage__diagrams-contentDiagram">
                      <CirculDiagram percent={data.percentageSold.toFixed(1)} />
                    </div>
                    <div></div>
                    <div className="statistickPage__diagrams-area">
                      <ul className="statistickPage__area-list">
                        <li className="statistickPage__area-item">
                          <h4 className="statistickPage__area-title">
                            {data.soldPixels
                              .toString()
                              .replace(/,/g, "")
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </h4>
                          <span className="statistickPage__area-subtitle">
                            Area sold
                          </span>
                        </li>
                        <li className="statistickPage__area-item">
                          <h4 className="statistickPage__area-title">
                            {data.remainingPixels
                              .toString()
                              .replace(/,/g, "")
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </h4>
                          <span className="statistickPage__area-subtitle">
                            Area remaining
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="statistickPage__diagrams-pictrure">
                    <img
                      src="/assets/Global/halfCircle.webp"
                      alt="Image Half Circle"
                      className="statistickPage__diagrams-pictrurebg"
                      height={289}
                      width={289}
                    />
                  </div>
                </div>
              </BlockContainer>
              <BlockContainer className="blockContainer--grey">
                <div className="statistickPage__diagrams-content">
                  <div className="statistickPage__diagrams-info">
                    <div className="statistickPage__diagrams-texts">
                      <h2 className="statistickPage__diagrams-title">
                        {data.totalPixels
                          .toString()
                          .replace(/,/g, "")
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </h2>
                      <span className="statistickPage__diagrams-descr">
                        Total owners
                      </span>
                    </div>
                    <div className="statistickPage__diagrams-buttons">
                      <Link to="/buyPixels">
                        <Button className="button--purple">
                          Become a owner
                          <img
                            src="/assets/UI/btnArrowSlim.svg"
                            alt="Img button arrow"
                            width={24}
                            height={24}
                          />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="statistickPage__diagrams-pictrure last">
                    <img
                      src="/assets/StatisticsPage/Cube.webp"
                      alt="Cube image"
                      className="statistickPage__diagrams-bg"
                      width={375}
                      height={296}
                    />
                  </div>
                </div>
              </BlockContainer>
            </>
          )}
        </div>
      </ArtBlock>
    </section>
  );
};

export default index;
