import "./country__MainP.scss";

import Button from "../../../../components/UI/Button";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import BlockContainer from "../../../../components/UI/BlockContainer";
import WidthContainer from "../../../../components/UI/WidthContainer";
import { Link } from "react-router-dom";
import worldMap from "../../../../mapData/worldMap.json";
import countryFlags from "../../../../mapData/countryFlag.json";
import * as d3 from "d3";
import { useEffect, useState, useRef } from "react";
import { useGetTopCountriesQuery } from "../../../../store/query/analyticsApi/analyticsSpecificStatisticsAPI";

export default function Country__MainP() {
  const canvasRef = useRef();
  const [skeletonHeight, setSkeletonHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let response = { data: null, isLoading: false, isError: false };
  const dataCountry = [
    {
      countryName: "Ukraine",
      percentageSold: 75,
      countryId: 1,
      id: 101,
      countryTag: "UA",
    },
    {
      countryName: "Poland",
      percentageSold: 1,
      countryId: 2,
      id: 102,
      countryTag: "PL",
    },
    {
      countryName: "Spain",
      percentageSold: 34,
      countryId: 3,
      id: 103,
      countryTag: "ES",
    },
  ];

  response = { data: dataCountry, isLoading: false, isError: false };

  const { data, isLoading, isError } = response;

  const imgsarray = [
    {
      src: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
      startX: 540,
      startY: 90,
      imageWidth: 30,
      imageHeight: 15,
    },
    {
      src: "/assets/tempImgs/Trident.png",
      startX: 1110,
      startY: 510,
      imageWidth: 10,
      imageHeight: 10,
    },
    {
      src: "/assets/tempImgs/Tesla.png",
      startX: 1100,
      startY: 220,
      imageWidth: 20,
      imageHeight: 20,
    },
    {
      src: "/assets/tempImgs/Binance.png",
      startX: 940,
      startY: 330,
      imageWidth: 25,
      imageHeight: 25,
    },
    {
      src: "https://miro.medium.com/v2/resize:fit:1400/1*cO7zcspeBASnfjFY6PAlgw.jpeg",
      startX: 340,
      startY: 210,
      imageWidth: 45,
      imageHeight: 25,
    },
  ];

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  // const fetchBatch = async (items) => {
  //   const batchSize = 5; // Ограничение на количество параллельных запросов
  //   const batches = [];
  //   for (let i = 0; i < items.length; i += batchSize) {
  //     const batch = items.slice(i, i + batchSize);
  //     batches.push(batch);
  //   }

  //   for (const batch of batches) {
  //     const promises = batch.map((item) => {
  //       const raw = JSON.stringify({
  //         name: item.properties.name,
  //         tag: item.id,
  //         continentId: item.properties.continent_id,
  //         // pixelNumber: 10,
  //         pixelNumber: item.properties.pixelNumber,
  //       });
  //       return fetch("http://64.226.73.97:8082/api/countries", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZW5AZXhhbXBsZTEuY29tIiwicm9sZSI6IlJPTEVfVVNFUiIsInVzZXJuYW1lIjoiQmVuMSIsImlhdCI6MTcxMjA2MzA0NywiZXhwIjoxNzEyMDY2NjQ3fQ.rfNlQVOtHzwSAIKqEp-8wYiHKL6bzZoG7nm3NKMWbx9WUYuue1Zb7AJai5ABlIa1pEgwyahE1x-uIWA8g-dT6g",
  //         },
  //         body: raw,
  //       })
  //         .then((response) => response.text())
  //         .catch((error) => console.error(error));
  //     });

  //     await Promise.all(promises);
  //   }
  // };

  // const handleClick = async () => {
  //   await fetchBatch(worldMap.features);
  // };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const zoomed = (transform) => {
      context.clearRect(0, 0, width, height);

      context.save();

      context.translate(transform.x, transform.y);
      context.scale(transform.k, transform.k);

      context.beginPath();
      path(worldMap);
      context.fillStyle = "#A255FB";
      context.fill();
      context.stroke();

      imgsarray.forEach((item) => {
        const image = new Image();
        image.src = item.src;
        context.drawImage(
          image,
          item.startX,
          item.startY,
          item.imageWidth,
          item.imageHeight
        );
      });

      context.restore();
    };

    const projection = d3.geoMercator().fitSize([width, height], worldMap);

    const path = d3.geoPath().projection(projection).context(context);
    context.clearRect(0, 0, width, height);
    context.beginPath();
    path(worldMap);

    context.fillStyle = "#A255FB";

    context.fill();
    context.stroke();

    imgsarray.forEach((item) => {
      const image = new Image();
      image.src = item.src;
      image.onload = () => {
        context.drawImage(
          image,
          item.startX,
          item.startY,
          item.imageWidth,
          item.imageHeight
        );
      };
    });
    context.restore();

    const zoomHandler = d3
      .zoom()
      .scaleExtent([1, 150])
      .on("start", () => {
        setIsDragging(true);
      })
      .on("zoom", ({ transform }) => {
        zoomed(transform);
      })
      .on("end", () => {
        setIsDragging(false);
      });

    d3.select(canvas).call(zoomHandler);
    zoomed(d3.zoomIdentity);

    return () => {
      d3.select(canvas).on(".zoom", null);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (isDragging) canvas.style.cursor = "grabbing";
    if (!isDragging) canvas.style.cursor = "grab";
  }, [isDragging]);
  useEffect(() => {
    if (windowWidth >= 768) setSkeletonHeight(198);
    if (windowWidth < 768) setSkeletonHeight(170);
  }, [windowWidth]);

  // if (isError) {
  //   return (
  //     <div>
  //       <button onClick={handleClick}>FETCH</button>
  //     </div>
  //   );
  // }
  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="cntry">
      {/* <button onClick={handleClick}>FETCH</button> */}
      <div className="cntry__mapBox">
        <canvas ref={canvasRef} width={1440} height={650} />
      </div>
      <WidthContainer>
        <div className="cntry__titleBox">
          <h2 className="cntry__title">Country statistics</h2>
          <Link to="/country">
            <Button className="button--purple">
              See All
              <img
                src="/assets/UI/btnArrowSlim.svg"
                alt="slimArrow"
                width={20}
                height={20}
              />
            </Button>
          </Link>
        </div>
        <div className="cntry__box">
          {isLoading ? (
            <>
              <SkeletonLoading height={skeletonHeight} />
              <SkeletonLoading height={skeletonHeight} />
              <SkeletonLoading height={skeletonHeight} />
            </>
          ) : (
            data.map((item) => (
              <CountryStatItem
                name={item.countryName}
                percentageSold={item.percentageSold}
                key={item.countryId}
                id={item.id}
                countryTag={item.countryTag}
              />
            ))
          )}
        </div>
      </WidthContainer>
    </section>
  );
}

function CountryStatItem({ name, id, percentageSold, countryTag }) {
  const canvasRef = useRef();
  const countryFlag = countryFlags.find((item) => item.name === name);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const currentCountry = worldMap.features.find(
      (item) => item.properties.name === name
    );

    const projection = d3
      .geoMercator()
      .fitSize([width, height], currentCountry);

    const path = d3.geoPath().projection(projection).context(context);
    context.clearRect(0, 0, width, height);
    context.beginPath();
    path(currentCountry);

    context.fillStyle = "#A255FB";

    context.fill();
    context.stroke();

    context.restore();

    return () => {
      d3.select(canvas).on(".zoom", null);
    };
  }, []);
  return (
    <BlockContainer className="blockContainer--grey">
      <span className="cntryItem__top">
        <span className="cntryItem__descr">
          <h3 className="cntryItem__title">{percentageSold}%</h3> Sold
        </span>
        <img
          src={countryFlag.flag_1x1}
          alt="cntryIcon"
          width={36}
          height={36}
          className="cntryItem__icon"
        />
      </span>
      <div className="cntryItem__bg">
        <canvas ref={canvasRef} width={500} height={200} />
      </div>
      <span className="cntryItem__bottom">
        <h3 className="cntryItem__title">{name}</h3>
        <Link to={`/country/${countryTag}`}>
          <Button className="button--blurGrey">
            Visit
            <img
              src="./assets/UI/btnArrow.svg"
              alt="btn_arrow"
              width={16}
              height={16}
              className="cntryItem__btnImg"
            />
          </Button>
        </Link>
      </span>
    </BlockContainer>
  );
}
