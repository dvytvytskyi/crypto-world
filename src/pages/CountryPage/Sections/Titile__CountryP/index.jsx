import "./titile__CountryP.scss";
import { useRef, useEffect, useState } from "react";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import BlockContainer from "../../../../components/UI/BlockContainer";
import WidthContainer from "../../../../components/UI/WidthContainer";
import CirculeDiagram from "../../../../components/CirculDiagram";
import worldMap from "../../../../mapData/worldMap.json";
import * as d3 from "d3";
import { useParams, useNavigate } from "react-router-dom";
import { useGetStatsForSpecificCountryQuery } from "../../../../store/query/analyticsApi/analyticsSpecificStatisticsAPI";

export default function Titile__CountryP() {
  const navigate = useNavigate();
  const { id } = useParams();
  const canvasRef = useRef();
  const [skeletonHeight, setSkeletonHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const currentCountry = worldMap.features.find((item) => item.id === id) || 0;
  const skip = Boolean(!currentCountry);
  const [data, setData] = useState({
    percentageSold: Math.floor(Math.random() * 100), // Random percentage
    soldPixels: Math.floor(Math.random() * 5000), // Random sold pixels
    totalPixels: 10000, // Total pixels
    remainingPixels: Math.floor(Math.random() * 5000), // Random remaining pixels
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (!currentCountry) {
      navigate("/");
    }
    document.title = "Country - " + currentCountry.properties.name;
    window.addEventListener("resize", handleResize);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const projection = d3
      .geoMercator()
      .fitSize([width, height], currentCountry);

    const path = d3.geoPath().projection(projection).context(context);
    context.clearRect(0, 0, width, height);
    context.beginPath();
    path(currentCountry);

    context.fillStyle = "#A255FB";
    context.shadowColor = "#B669FFD9";
    context.shadowBlur = 10;

    context.fill();
    context.shadowColor = "transparent";
    context.strokeStyle = "rgba(255, 185, 255, 0.9)";
    context.stroke();

    context.restore();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth >= 1440) setSkeletonHeight(326);
    if (windowWidth < 1440) setSkeletonHeight(183);
  }, [windowWidth]);

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (currentCountry) {
    return (
      <section className="titleCountryP">
        <WidthContainer>
          <div className="titleCountryP__leftBox">
            <span>
              <h1>{currentCountry.properties.name}</h1>
              <p className="artBlock__descr">
                Own a <span className="textPurple">Pixel</span>, Shape the{" "}
                <span className="textPurple">Virtual World</span>
              </p>
            </span>
            {isLoading ? (
              <SkeletonLoading height={skeletonHeight} />
            ) : (
              <BlockContainer className="blockContainer--purple">
                <span>
                  <CirculeDiagram radius={65} percent={data.percentageSold} />
                  <span>
                    <h2>Sold</h2>
                    <p>{data.soldPixels}</p>
                  </span>
                </span>
                <span>
                  <span>
                    <h3>Total</h3>
                    <p>{data.totalPixels}</p>
                  </span>
                  <span>
                    <h3>Remaining</h3>
                    <p>{data.remainingPixels}</p>
                  </span>
                </span>
                <img
                  src="/assets/Global/bublik.webp"
                  alt="bublik"
                  height={261}
                  width={261}
                  className="titleCountryP__bublik"
                />
              </BlockContainer>
            )}
          </div>
          <BlockContainer className="blockContainer--grey titleCountryP__rightBox">
            <canvas ref={canvasRef} width={700} height={500} />
          </BlockContainer>
        </WidthContainer>
      </section>
    );
  }
}
