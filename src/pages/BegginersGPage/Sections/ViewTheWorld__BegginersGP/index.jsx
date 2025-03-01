import "./viewTheWorld__BegginersGP.scss";

import BlockContainer from "../../../../components/UI/BlockContainer";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import { Link } from "react-router-dom";
import { useGetTopCountriesQuery } from "../../../../store/query/analyticsApi/analyticsSpecificStatisticsAPI";
import countryFlag from "../../../../mapData/countryFlag.json";
import { useState, useEffect } from "react";

export default function ViewTheWorld__BegginersGP() {
  const [skeletonHeight, setSkeletonHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const data = [
    {
      countryId: 1,
      countryName: "Afghanistan",
      percentageSold: 85,
      flag_1x1: "/assets/UI/Flags/1x1/ad.svg",
    },
    {
      countryId: 2,
      countryName: "Albania",
      percentageSold: 78,
      flag_1x1: "/assets/UI/Flags/1x1/ad.svg",
    },
    {
      countryId: 3,
      countryName: "Algeria",
      percentageSold: 92,
      flag_1x1: "/assets/UI/Flags/1x1/ad.svg",
    },
    {
      countryId: 4,
      countryName: "Andorra",
      percentageSold: 74,
      flag_1x1: "/assets/UI/Flags/1x1/ad.svg",
    },
  ];
  let isLoading = false;
  let isError = false;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (windowWidth >= 1440) setSkeletonHeight(244);
    if (windowWidth < 1440) setSkeletonHeight(196);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <section className="begginersGPage__viewTheWorld">
      <div className="begginersGPage__viewTheWorldBoxWText">
        <h2>View the world</h2>
        <p>
          Discover the world from a new perspective. Immersive panoramas,
          breathtaking landscapes, and vibrant cityscapes await you. Choose your
          destination and bring it to life with stunning pixel art.
        </p>
      </div>
      <BlockContainer className="blockContainer--artwork1">
        <img src="/assets/GuidPage/st6.png" alt="" />
      </BlockContainer>
      {isLoading ? (
        <SkeletonLoading height={skeletonHeight} />
      ) : (
        <BlockContainer className="blockContainer--grey">
          <span className="begginersGPage__viewTheWorldBoxTop">
            {data.map((item) => {
              const img = countryFlag.find(
                (flag) => flag.name === item.countryName
              );
              return (
                <span key={item.countryId}>
                  <img
                    src={img.flag_1x1}
                    alt="cntryIcon"
                    width={36}
                    height={36}
                  />
                  {item.percentageSold}%
                </span>
              );
            })}
          </span>
          <span className="begginersGPage__viewTheWorldBoxBottom">
            <h3>Country statistics</h3>
            <span>
              <p>View statistics</p>
              <a href="#">
                <img src="/assets/UI/btnArrow.svg" alt="arrow" />
              </a>
            </span>
          </span>
          <img
            src="/assets/Global/halfCircle.webp"
            alt="halfCircle"
            width={220}
            height={220}
            className="begginersGPage__viewTheWorldCurve"
          />
        </BlockContainer>
      )}
      <BlockContainer className="blockContainer--purple">
        <div className="wallOfFame__purpleBg">
          <span className="begginersGPage__viewTheWorldBoxBottom">
            <h3>Wall Of Fame</h3>
            <span>
              <p>View owners</p>
              <Link to={"/halloffame"}>
                <img src="/assets/UI/btnArrow.svg" alt="arrow" />
              </Link>
            </span>
            <img
              src="/assets/Global/cube.webp"
              alt="cube"
              height={214}
              width={214}
              className="begginersGPage__viewTheWorldCubeImg"
            />
            <img
              src="/assets/GuidPage/blocks.svg"
              alt="blocks"
              height={294}
              width={474}
              className="begginersGPage__viewTheWorldBlocksImg"
            />
          </span>
        </div>
      </BlockContainer>
    </section>
  );
}
