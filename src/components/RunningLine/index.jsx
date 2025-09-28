import "./runningLine.scss";

import BlockContainer from "../UI/BlockContainer";
import { useEffect, useState } from "react";
import { useGetTopCompaniesQuery } from "../../store/query/analyticsApi/analyticsCompanyStatisticAPI";
import SkeletonLoading from "../UI/SkeletonLoading";

export default function RunningLine() {
  let response = { data: null, isLoading: false, isError: false };
  const dataCountry = [
    {
      img: "/assets/tempImgs/Binance.png",
      name: "Binance",
      totalPixels: 456,
    },
    {
      img: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
      name: "Google",
      totalPixels: 2567,
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/1*cO7zcspeBASnfjFY6PAlgw.jpeg",
      name: "Fiverr",
      totalPixels: 9089,
    },
  ];

  response = { data: dataCountry, isLoading: false, isError: false };
  const { data, isLoading, isError } = response;
  const [skeletonHeight, setSkeletonHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const skeletonArray = new Array(20).fill(0);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  let filledData;
  if (data)
    filledData = Array.from(
      { length: 10 },
      (_, index) => data[index % data.length]
    );
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth >= 1440) setSkeletonHeight(82);
    if (windowWidth < 768) setSkeletonHeight(62);
  }, [windowWidth]);

  return (
    <div className="runningLine">
      <div className="items__wrap">
        <div className="items marquee">
          {isLoading
            ? skeletonArray.map((item, index) => (
                <SkeletonLoading key={index} height={skeletonHeight} />
              ))
            : filledData.map((item, index) => (
                <RunningLineItem
                  key={index + 1}
                  name={item.name}
                  img={item.img}
                  totalPixels={item.totalPixels}
                />
              ))}
        </div>
        <div className="items marquee" aria-hidden>
          {isLoading
            ? skeletonArray.map((item, index) => (
                <SkeletonLoading key={index} height={skeletonHeight} />
              ))
            : filledData.map((item, index) => (
                <RunningLineItem
                  key={index}
                  name={item.name}
                  img={item.img}
                  totalPixels={item.totalPixels}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

function RunningLineItem({ name, img, totalPixels }) {
  return (
    <div className="runningLine__item">
      <BlockContainer className="blockContainer--grey">
        <img
          src={img}
          alt="usericon"
          className="runningLine__userIcon"
          width={48}
          height={48}
        />
        <span className="runningLine__userDescr">
          <span className="runningLine__userDescr runningLine__userDescr--strong">
            {totalPixels
              .toString()
              .replace(/,/g, "")
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          {name}
        </span>
      </BlockContainer>
    </div>
  );
}
