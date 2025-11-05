import React, { useState, useEffect } from "react";
import WidthContainer from "../../components/UI/WidthContainer";
import PixelMapCanvas from "./Sections/PixelMapCanvas";
import "./pixelMapPage.scss";

const PixelMapPage = () => {
  const [selectedPixels, setSelectedPixels] = useState([]);
  const [pixelsType, setPixelsType] = useState("Single");

  useEffect(() => {
    document.title = "Pixel Map";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Interactive Pixel Map");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Pixel Map");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Interactive Pixel Map");
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pixelMapPage">
      <WidthContainer>
        <div className="pixelMapPage__header">
          <h1 className="pixelMapPage__title">Pixel Map</h1>
          <p className="pixelMapPage__description">
            Натисніть на карту, щоб вибрати пікселі. Використовуйте Shift для швидкого вибору.
          </p>
        </div>
        <PixelMapCanvas
          selectedPixels={selectedPixels}
          setSelectedPixels={setSelectedPixels}
          pixelsType={pixelsType}
          setPixelsType={setPixelsType}
        />
        <div className="pixelMapPage__info">
          <div className="pixelMapPage__stats">
            <div className="pixelMapPage__stat">
              <span className="pixelMapPage__stat-label">Вибрано пікселів:</span>
              <span className="pixelMapPage__stat-value">{selectedPixels.length}</span>
            </div>
            {selectedPixels.length > 0 && (
              <div className="pixelMapPage__stat">
                <span className="pixelMapPage__stat-label">Режим:</span>
                <span className="pixelMapPage__stat-value">{pixelsType}</span>
              </div>
            )}
          </div>
        </div>
      </WidthContainer>
    </main>
  );
};

export default PixelMapPage;

