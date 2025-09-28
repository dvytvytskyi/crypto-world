import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import Button from "../../../../components/UI/Button";
import PurchasedPrice from "../../../../components/StepsPComponents/PurchasedPrice";
import PixelMap from "../../../../components/PixelMap";
import "./blocksMap__StepsP.scss";
import countryFlag from "../../../../mapData/countryFlag.json";
import { useState, useEffect } from "react";

const index = ({
  setActiveStep,
  selectedPixels,
  setShowPopUp,
  pixelsType,
  countryDominance,
  setCountryDominance,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showPixelSelector, setShowPixelSelector] = useState(false);

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

    // Calculate country dominance
    let countreis = {};
    selectedPixels.forEach((item) => {
      const country = item.country;
      countreis[country] = (countreis[country] || 0) + 1;
    });
    let countriesArray = [];
    Object.keys(countreis).forEach((country) => {
      const flag = countryFlag.find((item) => item.name === country);
      if (flag) {
        const countryData = {
          country: country,
          flag: flag.flag_1x1,
          countryID: country,
          pixelCount: countreis[country],
          countryDominance: "100.0000", // Simplified for now
        };
        countriesArray.push(countryData);
      }
    });
    setCountryDominance(countriesArray);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedPixels, pixelsType]);

  // Блокування скролу при відкритті модального вікна
  useEffect(() => {
    if (showPixelSelector) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showPixelSelector]);
  return (
    <section className="steps__blockMap">
      <BlockContainer className="blockContainer--grey">
        <div className="pixel-selector-preview">
          <h3>Pixel Selection</h3>
          <p>Click "Select Pixels" to choose pixels on the map</p>
          <Button
            className="button--purple"
            handler={() => setShowPixelSelector(true)}
          >
            Select Pixels
          </Button>
        </div>
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

      {/* Pixel Selection Modal */}
      {showPixelSelector && (
        <div className="pixel-selector-modal">
          <div className="pixel-selector-modal-content">
            <div className="pixel-selector-header">
              <h2>Select Pixels</h2>
              <button
                className="close-button"
                onClick={() => setShowPixelSelector(false)}
              >
                ×
              </button>
            </div>
            <div className="pixel-selector-map">
              <PixelMap
                imageUrl="/assets/PixelMap/world.png"
                isEditable={true}
                maxSelectionSize={15}
                initialTool="select"
                onPixelSelection={(pixels) => {
                  // Обмежуємо вибір до 15x15 пікселів
                  if (pixels.length > 225) {
                    // 15 * 15 = 225
                    return false;
                  }
                  return true;
                }}
              />
            </div>
            <div className="pixel-selector-actions">
              <Button
                className="button--grey"
                handler={() => setShowPixelSelector(false)}
              >
                Cancel
              </Button>
              <Button
                className="button--purple"
                handler={() => {
                  setShowPixelSelector(false);
                  setShowPopUp(true);
                }}
              >
                Confirm Selection
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default index;
