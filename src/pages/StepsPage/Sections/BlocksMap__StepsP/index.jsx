import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import Button from "../../../../components/UI/Button";
import PurchasedPrice from "../../../../components/StepsPComponents/PurchasedPrice";
import "./blocksMap__StepsP.scss";
import worldMap from "../../../../mapData/worldMap.json";
import countryFlag from "../../../../mapData/countryFlag.json";
import * as d3 from "d3";
import { useState, useEffect, useRef } from "react";

const index = ({
  setActiveStep,
  selectedPixels,
  setShowPopUp,
  pixelsType,
  countryDominance,
  setCountryDominance,
}) => {
  const canvasRef = useRef();
  const [skeletonHeight, setSkeletonHeight] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const isClosed = (pixels) => {
    if (pixels.length < 4) return false;

    const countries = new Set(pixels.map((pixel) => pixel.country));
    if (countries.size !== 1) return false;

    const xValues = pixels.map((pixel) => pixel.x);
    const yValues = pixels.map((pixel) => pixel.y);

    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);

    const width = maxX - minX;
    const height = maxY - minY;

    const expectedPixelCount = (width + 1) * (height + 1);

    return (
      xValues.length === expectedPixelCount &&
      yValues.length === expectedPixelCount &&
      width > 0 &&
      height > 0
    );
  };
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

      context.fillStyle =
        pixelsType === "Grouped"
          ? isClosed(selectedPixels)
            ? "#6d39a8"
            : "red"
          : "#6d39a8";
      selectedPixels.forEach((pixel) => {
        const { x, y } = pixel;
        context.fillRect(x, y, 1, 1);
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

    context.fillStyle =
      pixelsType === "Grouped"
        ? isClosed(selectedPixels)
          ? "#6d39a8"
          : "red"
        : "#6d39a8";
    selectedPixels.forEach((pixel) => {
      const { x, y } = pixel;
      context.fillRect(x, y, 1, 1);
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

    let countreis = {};
    selectedPixels.forEach((item) => {
      const country = item.country;
      countreis[country] = (countreis[country] || 0) + 1;
    });
    let countriesArray = [];
    Object.keys(countreis).forEach((country) => {
      const totalInCountryPixels = worldMap.features.find(
        (item) => item.properties.name === country
      );
      const flag = countryFlag.find((item) => item.name === country);
      const countryData = {
        country: country,
        flag: flag.flag_1x1,
        countryID: totalInCountryPixels.id,
        pixelCount: countreis[country],
        countryDominance: (
          (countreis[country] / totalInCountryPixels.properties.pixelNumber) *
          100
        ).toFixed(4),
      };
      countriesArray.push(countryData);
    });
    setCountryDominance(countriesArray);
    return () => {
      d3.select(canvas).on(".zoom", null);
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedPixels, pixelsType]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (isDragging) canvas.style.cursor = "grabbing";
    if (!isDragging) canvas.style.cursor = "grab";
  }, [isDragging]);
  return (
    <section className="steps__blockMap">
      <BlockContainer className="blockContainer--grey">
        <canvas
          ref={canvasRef}
          width={1024}
          height={650}
          style={{ maxWidth: "100%" }}
        />
        <Button className="button--purple" handler={() => setShowPopUp(true)}>
          Select Pixels
        </Button>
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <div className="steps__blockMap-blocks">
          <BlockContainer className="blockContainer--grey">
            <h5 className="steps__blockMap-title">
              {selectedPixels.length
                ? selectedPixels.length
                : "No Pixels Selected"}
            </h5>
            <span className="blocksInfo-descr">Number of pixels selected</span>
          </BlockContainer>
          <BlockContainer className="blockContainer--grey">
            <h5>Countries selected</h5>
            <div className="blocksInfo-countries">
              {countryDominance.length
                ? countryDominance.map((item, index) => (
                    <span key={index}>
                      <img
                        src={item.flag}
                        alt="Country image"
                        width={16}
                        height={16}
                      />
                      <div className="blocksInfo-text">
                        {item.country} <span>{item.countryDominance}%</span>
                      </div>
                    </span>
                  ))
                : "No Pixels Selected"}
            </div>
          </BlockContainer>
          <PurchasedPrice />
          <p className="">
            When placing pixels in grouped mode, you should follow a few rules:
            <br />- The group should form a closed figure. <br />- The group
            should be located within a single country.
          </p>
        </div>
        <div className="steps__blockMap-button">
          <Button
            className={`button--${
              (!isClosed(selectedPixels) && pixelsType) === "Grouped"
                ? "gradientBorder"
                : "purple"
            }`}
            handler={() => {
              if (!isClosed(selectedPixels) && pixelsType === "Grouped") return;
              if (!selectedPixels.length) return;
              else setActiveStep(2);
            }}
          >
            Next Step{" "}
            <img src="/assets/UI/btnArrowSlim.svg" alt="Image arrow button" />
          </Button>
        </div>
      </BlockContainer>
    </section>
  );
};

export default index;
