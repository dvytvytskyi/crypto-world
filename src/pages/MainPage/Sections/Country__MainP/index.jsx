import "./country__MainP.scss";

import Button from "../../../../components/UI/Button";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import BlockContainer from "../../../../components/UI/BlockContainer";
import WidthContainer from "../../../../components/UI/WidthContainer";
import { Link } from "react-router-dom";
import countryFlags from "../../../../mapData/countryFlag.json";
import { useEffect, useState, useRef } from "react";
import worldMap from "../../../../mapData/worldMap.json";
import * as d3 from "d3";
import PixelMap from "../../../../components/PixelMap";

export default function Country__MainP() {
  const [skeletonHeight, setSkeletonHeight] = useState(0);
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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth >= 768) setSkeletonHeight(198);
    if (windowWidth < 768) setSkeletonHeight(170);
  }, [windowWidth]);

  // Блокування скролу при взаємодії з картою
  useEffect(() => {
    const handleWheel = (e) => {
      const target = e.target;
      const isPixelMap =
        target.closest(".pixel-map-container") ||
        target.closest(".pixel-map-wrapper");

      if (isPixelMap) {
        // Дозволяємо zoom на карті, але блокуємо скрол сторінки
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

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
        {/* <canvas ref={canvasRef} width={1440} height={650} /> */}
        <PixelMap imageUrl="/assets/PixelMap/world.png" isEditable={false} />
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
