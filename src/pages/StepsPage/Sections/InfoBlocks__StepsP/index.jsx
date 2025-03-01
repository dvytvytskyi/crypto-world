import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import worldMap from "../../../../mapData/worldMap.json";
import BlockContainer from "../../../../components/UI/BlockContainer";
import BlocksInfo from "../../../../components/StepsPComponents/BlocksInfo";
import PurchasedPrice from "../../../../components/StepsPComponents/PurchasedPrice";
import Button from "../../../../components/UI/Button";
import "./infoBlocks__StepsP.scss";

const index = ({
  setActiveStep,
  pixelsNumber,
  countries,
  companyData,
  selectedPixels,
  pixelType,
  icon,
}) => {
  const { hostname } = new URL(companyData.wLink);
  const hostnameWithoutWWW = hostname.replace(/^www\./, "");
  const canvasRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  let logo;
  if (icon instanceof File) logo = URL.createObjectURL(icon);
  else logo = icon;
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;

    const resetScale = () => {
      const canvas = d3.select(canvasRef.current);
      canvas.transition().call(zoomHandler.transform, d3.zoomIdentity);
    };
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

      const image = new Image();
      image.src = logo;

      if (selectedPixels)
        if (pixelType === "Single")
          selectedPixels.forEach((item) => {
            context.drawImage(image, item.x, item.y, 1, 1);
          });
        else {
          const topLeftPixel = selectedPixels.reduce((prev, current) => {
            return {
              x: Math.min(prev.x, current.x),
              y: Math.min(prev.y, current.y),
            };
          });

          const bottomRightPixel = selectedPixels.reduce((prev, current) => {
            return {
              x: Math.max(prev.x, current.x),
              y: Math.max(prev.y, current.y),
            };
          });

          const width = bottomRightPixel.x - topLeftPixel.x + 1;
          const height = bottomRightPixel.y - topLeftPixel.y + 1;

          const imageX = topLeftPixel.x;
          const imageY = topLeftPixel.y;
          const imageWidth = width;
          const imageHeight = height;

          context.drawImage(image, imageX, imageY, imageWidth, imageHeight);
        }
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

    const image = new Image();
    image.src = logo;

    if (selectedPixels) {
      if (pixelType === "single")
        selectedPixels.forEach((item) => {
          context.drawImage(image, item.x, item.y, 1, 1);
        });
      else {
        const topLeftPixel = selectedPixels.reduce((prev, current) => {
          return {
            x: Math.min(prev.x, current.x),
            y: Math.min(prev.y, current.y),
          };
        });

        const bottomRightPixel = selectedPixels.reduce((prev, current) => {
          return {
            x: Math.max(prev.x, current.x),
            y: Math.max(prev.y, current.y),
          };
        });

        const width = bottomRightPixel.x - topLeftPixel.x + 1;
        const height = bottomRightPixel.y - topLeftPixel.y + 1;

        const imageX = topLeftPixel.x;
        const imageY = topLeftPixel.y;
        const imageWidth = width;
        const imageHeight = height;

        context.drawImage(image, imageX, imageY, imageWidth, imageHeight);
      }
    }

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
    resetScale();
    return () => {
      d3.select(canvas).on(".zoom", null);
    };
  }, [selectedPixels]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (isDragging) canvas.style.cursor = "grabbing";
    if (!isDragging) canvas.style.cursor = "grab";
  }, [isDragging]);
  return (
    <section className="infoBlocks__blocks">
      <BlockContainer className="blockContainer--grey">
        <BlockContainer className="blockContainer--grey">
          <canvas
            ref={canvasRef}
            width={1024}
            height={650}
            style={{ maxWidth: "100%" }}
          />
        </BlockContainer>
        <BlocksInfo pixelsNumber={pixelsNumber} countries={countries} />
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <div className="infoBlocks__blocks-blocks info">
          <BlockContainer className="blockContainer--grey">
            <div className="infoBlocks__blocks-company">
              <img src={logo} alt="Company Logo" width={36} height={36} />
              <div className="infoBlocks__blocks-texts one">
                <h5>{companyData.name}</h5>
                <span>Name</span>
              </div>
            </div>
          </BlockContainer>
          <BlockContainer className="blockContainer--grey">
            <div className="infoBlocks__blocks-texts two">
              <a href={companyData.wLink}>
                <h5>{hostnameWithoutWWW}</h5>
              </a>
              <span>Website Link</span>
            </div>
          </BlockContainer>
          <BlockContainer className="blockContainer--grey">
            <div className="infoBlocks__blocks-texts three">
              <h5>Description</h5>
              <span>{companyData.descr}</span>
            </div>
          </BlockContainer>
        </div>
        <div className="infoBlocks__blocks-purchasedPrice">
          <PurchasedPrice />
        </div>
        <div className="steps__form-button">
          <Button className="button--grey" handler={() => setActiveStep(2)}>
            <img
              src="/assets/UI/btnArrowSlim.svg"
              alt="Image arrow button"
              className="steps__form-imgReverse"
            />
            Back
          </Button>
          <Button className="button--purple">
            Purchase
            <img
              src="/assets/StepsPage/success.png"
              alt="Image success form"
              width={20}
              height={20}
            />
          </Button>
        </div>
      </BlockContainer>
    </section>
  );
};

export default index;
