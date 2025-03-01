import BlockContainer from "../../../../components/UI/BlockContainer";
import Button from "../../../../components/UI/Button";
import Popup from "../../../../components/UI/Popup";
import * as d3 from "d3";
import worldMap from "../../../../mapData/worldMap.json";
import countryFlag from "../../../../mapData/countryFlag.json";
import { useState, useRef, useEffect } from "react";
import "./popup__MarketP.scss";
import { Link } from "react-router-dom";

export default function Popup__MarketP({ handler, isVisible, pixels, icon }) {
  const canvasRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [tableData, setTableData] = useState(null);

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
      image.src = icon;

      if (pixels)
        if (pixels.type === "Single")
          pixels.pixel.forEach((item) => {
            context.drawImage(image, item.x, item.y, 1, 1);
          });
        else {
          const topLeftPixel = pixels.pixel.reduce((prev, current) => {
            return {
              x: Math.min(prev.x, current.x),
              y: Math.min(prev.y, current.y),
            };
          });

          const bottomRightPixel = pixels.pixel.reduce((prev, current) => {
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
    image.src = icon;

    if (pixels) {
      if (pixels.type === "Single")
        pixels.pixel.forEach((item) => {
          context.drawImage(image, item.x, item.y, 1, 1);
        });
      else {
        const topLeftPixel = pixels.pixel.reduce((prev, current) => {
          return {
            x: Math.min(prev.x, current.x),
            y: Math.min(prev.y, current.y),
          };
        });

        const bottomRightPixel = pixels.pixel.reduce((prev, current) => {
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
      let countreis = {};
      pixels.pixel.forEach((item) => {
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
      setTableData(countriesArray);
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
  }, [pixels]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (isDragging) canvas.style.cursor = "grabbing";
    if (!isDragging) canvas.style.cursor = "grab";
  }, [isDragging]);
  return (
    <section className="popupMainP">
      <Popup
        handlerClose={(e) => {
          handler(false);
        }}
        isVisible={isVisible}
      >
        <BlockContainer className="blockContainer--grey">
          <span className="popupMainP__top">
            <h3>Buy Country</h3>
            <Button className="button--grey" handler={() => handler(false)}>
              <img
                src="/assets/UI/closeIcon.svg"
                alt="closeIcon"
                width={13}
                height={13}
              />
            </Button>
          </span>
          <div className="popupMainP__content">
            <div className="popupMainP__countryBox">
              <canvas ref={canvasRef} width={1024} height={650} />
            </div>
            <div className="popupMainP__table">
              <div className="tableDescr__table">
                <table className="tableDescr__table-table">
                  <thead className="tableDescr__table-thead">
                    <tr>
                      <th className="tableDescr__table-head radiuslu">
                        COUNTRY
                      </th>
                      <th className="tableDescr__table-head">PIXEL AMOUNT</th>
                      <th className="tableDescr__table-head radiusru">
                        DOMINANCE
                      </th>
                    </tr>
                  </thead>
                  <tbody className="tableDescr__table-body">
                    {tableData &&
                      tableData.map((item) => (
                        <tr className="tableDescr__table-tr ">
                          <td className="tableDescr__table-descr">
                            <div className="tableDescr__table-info">
                              <Link to={`/country/${item.countryID}`}>
                                <img
                                  src={item.flag}
                                  alt="cntryFlag"
                                  width={24}
                                  height={24}
                                  className="tableDescr__table-countryIcon"
                                />
                              </Link>
                              {item.country}
                            </div>
                          </td>
                          <td className="tableDescr__table-descr">
                            <div className="tableDescr__table-button">
                              <div className="tableDescr__table-info">
                                {item.pixelCount}
                              </div>
                            </div>
                          </td>
                          <td className="tableDescr__table-descr">
                            <div className="tableDescr__table-button">
                              <div className="tableDescr__table-info">
                                {item.countryDominance}%
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    <tr className="tableDescr__table-tr">
                      <td className="tableDescr__table-descr  radiusld">
                        <div className="tableDescr__table-info">
                          <img
                            src="/assets/UI/globalIcon.svg"
                            alt="globalIcon"
                            width={24}
                            height={24}
                          />
                          World
                        </div>
                      </td>
                      <td className="tableDescr__table-descr">
                        <div className="tableDescr__table-button">
                          <div className="tableDescr__table-info">
                            {pixels && pixels.pixel.length}
                          </div>
                        </div>
                      </td>
                      <td className="tableDescr__table-descr radiusrd">
                        <div className="tableDescr__table-button">
                          <div className="tableDescr__table-info">
                            {pixels &&
                              ((pixels.pixel.length / 389409) * 100).toFixed(4)}
                            %
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </BlockContainer>
      </Popup>
    </section>
  );
}
