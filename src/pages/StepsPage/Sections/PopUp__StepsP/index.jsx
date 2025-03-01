import { useState, useEffect, useRef } from "react";
import "./map__StepsP.scss";
import * as d3 from "d3";
import worldMap from "../../../../mapData/worldMap.json";
import PopUp from "../../../../components/UI/Popup";
import Button from "../../../../components/UI/Button";

const index = ({
  isVisible,
  handlerClose,
  selectedPixels,
  setSelectedPixels,
  pixelsType,
  setPixelsType,
}) => {
  const canvasRef = useRef();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [busyPixels, setBusyPixels] = useState([]);
  const [transformState, setTransformState] = useState({ x: 0, y: 0, k: 1 });
  const [shiftPressed, setShiftPressed] = useState(false);
  const prevSelectedPixelsRef = useRef([]);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Shift") {
      setShiftPressed(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Shift") {
      setShiftPressed(false);
    }
  };
  const zoomed = (transform) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    context.clearRect(0, 0, width, height);

    context.save();

    context.translate(transform.x, transform.y);
    context.scale(transform.k, transform.k);
    const projection = d3.geoMercator().fitSize([width, height], worldMap);

    const path = d3.geoPath().projection(projection).context(context);

    context.beginPath();
    path(worldMap);
    context.fillStyle = "#A255FB";
    context.fill();
    context.stroke();

    if (windowWidth < 1020 && transform.k > 30) {
      const gridSize = 1;

      context.strokeStyle = "#ccc";
      context.lineWidth = 0.5 / transform.k;

      for (let x = 0; x < width; x += gridSize) {
        context.moveTo(x, 0);
        context.lineTo(x, height);
      }

      for (let y = 0; y < height; y += gridSize) {
        context.moveTo(0, y);
        context.lineTo(width, y);
      }
    }
    if (windowWidth >= 1020 && transform.k > 10) {
      if (transform.k > 10) {
        const gridSize = 1;

        context.strokeStyle = "#ccc";
        context.lineWidth = 0.5 / transform.k;

        for (let x = 0; x < width; x += gridSize) {
          context.moveTo(x, 0);
          context.lineTo(x, height);
        }

        for (let y = 0; y < height; y += gridSize) {
          context.moveTo(0, y);
          context.lineTo(width, y);
        }
      }
    }

    context.stroke();

    context.fillStyle = "#6d39a8";
    selectedPixels.forEach((pixel) => {
      const { x, y } = pixel;
      context.fillRect(x, y, 1, 1);
    });
    context.stroke();
    context.fillStyle = "gray";
    busyPixels.forEach((pixel) => {
      const { x, y } = pixel;
      context.fillRect(x, y, 1, 1);
    });
    context.restore();
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
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    window.addEventListener("resize", handleResize);

    const handlePixelClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const transform = d3.zoomTransform(canvas);
      const tempWidth = (width - canvas.clientWidth) / 2.5;
      const tempHeight = (height - canvas.clientHeight) / 2.5;

      const canvasX = (mouseX + tempWidth - transform.x) / transform.k;
      const canvasY = (mouseY + tempHeight - transform.y) / transform.k;

      const isInsideBlueArea = context.isPointInPath(mouseX, mouseY);
      let newPixel = {
        x: Math.floor(canvasX),
        y: Math.floor(canvasY),
        country: "",
        countryID: "",
      };

      if (windowWidth < 1020 && transformState.k > 30) {
        if (
          isInsideBlueArea &&
          !busyPixels.some(
            (pixel) => pixel.x === newPixel.x && pixel.y === newPixel.y
          )
        ) {
          const existsIndex = selectedPixels.findIndex(
            (pixel) => pixel.x === newPixel.x && pixel.y === newPixel.y
          );

          if (existsIndex === -1) {
            const scaledPoint = projection.invert([
              Math.floor(canvasX),
              Math.floor(canvasY),
            ]);

            worldMap.features.forEach((item) => {
              if (d3.geoContains(item, scaledPoint)) {
                newPixel.country = item.properties.name;
                newPixel.countryID = item.id;
              }
            });
            if (newPixel.country)
              setSelectedPixels((prevState) => [...prevState, newPixel]);
          } else {
            setSelectedPixels((prevState) =>
              prevState.filter((_, index) => index !== existsIndex)
            );
          }
        }
      }
      if (windowWidth >= 1020) {
        if (
          isInsideBlueArea &&
          !busyPixels.some(
            (pixel) => pixel.x === newPixel.x && pixel.y === newPixel.y
          )
        ) {
          const existsIndex = selectedPixels.findIndex(
            (pixel) => pixel.x === newPixel.x && pixel.y === newPixel.y
          );

          if (existsIndex === -1) {
            const scaledPoint = projection.invert([
              Math.floor(canvasX),
              Math.floor(canvasY),
            ]);

            worldMap.features.forEach((item) => {
              if (d3.geoContains(item, scaledPoint)) {
                newPixel.country = item.properties.name;
                newPixel.countryID = item.id;
              }
            });
            if (newPixel.country)
              setSelectedPixels((prevState) => [...prevState, newPixel]);
          } else {
            setSelectedPixels((prevState) =>
              prevState.filter((_, index) => index !== existsIndex)
            );
          }
        }
      }
    };

    const projection = d3.geoMercator().fitSize([width, height], worldMap);

    const path = d3.geoPath().projection(projection).context(context);
    context.clearRect(0, 0, width, height);
    context.beginPath();
    path(worldMap);

    context.fillStyle = "#A255FB";

    context.fill();
    context.stroke();

    context.restore();

    const zoomHandler = d3
      .zoom()
      .scaleExtent([1, 150])
      .on("zoom", ({ transform }) => {
        setTransformState(transform);
        zoomed(transform);
      });

    d3.select(canvas).call(zoomHandler);
    zoomed(d3.zoomIdentity);

    canvas.addEventListener("click", handlePixelClick);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    const transform = d3.zoomTransform(canvas);
    zoomed(transform);
    const uniqueSelectedPixels = selectedPixels.filter(
      (pixel, index) =>
        selectedPixels.findIndex((p) => p.x === pixel.x && p.y === pixel.y) ===
        index
    );

    const hasChanged =
      JSON.stringify(uniqueSelectedPixels) !==
      JSON.stringify(prevSelectedPixelsRef.current);

    if (hasChanged) {
      setSelectedPixels(uniqueSelectedPixels);
      prevSelectedPixelsRef.current = uniqueSelectedPixels;
    }
    return () => {
      d3.select(canvas).on(".zoom", null);
      canvas.removeEventListener("click", handlePixelClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedPixels, windowWidth, transformState]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const pixelWidth = 1;
    const pixelHeight = 1;
    const handleMouseMove = (event) => {
      const context = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const width = canvas.width;
      const height = canvas.height;
      const tempWidth = (width - canvas.clientWidth) / 2.5;
      const tempHeight = (height - canvas.clientHeight) / 2.5;

      const canvasX =
        (mouseX + tempWidth - transformState.x) / transformState.k;
      const canvasY =
        (mouseY + tempHeight - transformState.y) / transformState.k;

      const pixelX = canvasX - pixelWidth / 2;
      const pixelY = canvasY - pixelHeight / 2;

      context.clearRect(0, 0, width, canvas.height);

      context.save();

      context.translate(transformState.x, transformState.y);
      context.scale(transformState.k, transformState.k);

      const projection = d3.geoMercator().fitSize([width, height], worldMap);
      const path = d3.geoPath().projection(projection).context(context);

      context.beginPath();
      path(worldMap);
      context.fillStyle = "#A255FB";
      context.fill();
      context.stroke();
      if (transformState.k > 10) {
        const gridSize = 1;
        context.strokeStyle = "#ccc";
        context.lineWidth = 0.5 / transformState.k;

        for (let x = 0; x < width; x += gridSize) {
          context.moveTo(x, 0);
          context.lineTo(x, height);
        }

        for (let y = 0; y < height; y += gridSize) {
          context.moveTo(0, y);
          context.lineTo(width, y);
        }
      }
      context.stroke();
      context.fillStyle = "#6d39a8";
      selectedPixels.forEach((pixel) => {
        const { x, y } = pixel;
        context.fillRect(x, y, 1, 1);
      });
      context.stroke();
      context.fillStyle = "gray";
      busyPixels.forEach((pixel) => {
        const { x, y } = pixel;
        context.fillRect(x, y, 1, 1);
      });

      const isInsideBlueArea = context.isPointInPath(mouseX, mouseY);
      const isInsideBusyPixel = !busyPixels.some(
        (pixel) =>
          pixel.x === Math.floor(canvasX) && pixel.y === Math.floor(canvasY)
      );
      if (
        isInsideBlueArea &&
        !selectedPixels.some(
          (pixel) =>
            pixel.x === Math.floor(canvasX) && pixel.y === Math.floor(canvasY)
        ) &&
        isInsideBusyPixel
      ) {
        context.fillStyle = "#6924B9";
        context.fillRect(pixelX, pixelY, 1, 1);
      }

      if (isInsideBlueArea && shiftPressed && isInsideBusyPixel) {
        let newPixel = {
          x: Math.floor(canvasX),
          y: Math.floor(canvasY),
          country: "",
          countryID: "",
        };
        const isPixelAlreadySelected = selectedPixels.some(
          (pixel) => pixel.x === newPixel.x && pixel.y === newPixel.y
        );

        if (!isPixelAlreadySelected) {
          const scaledPoint = projection.invert([
            Math.floor(canvasX),
            Math.floor(canvasY),
          ]);

          worldMap.features.forEach((item) => {
            if (d3.geoContains(item, scaledPoint)) {
              newPixel.country = item.properties.name;
              newPixel.countryID = item.id;
            }
          });
          if (newPixel.country)
            setSelectedPixels((prevState) => [...prevState, newPixel]);
        }
      }
      if (isInsideBlueArea && isInsideBusyPixel) {
        canvas.style.cursor = "crosshair";
      } else {
        canvas.style.cursor = "default";
      }

      context.restore();
    };

    if (windowWidth > 1020)
      canvas.addEventListener("mousemove", handleMouseMove);
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [transformState, selectedPixels, shiftPressed, windowWidth]);
  return (
    <PopUp isVisible={isVisible} handlerClose={() => handlerClose(false)}>
      <div className="mapSteps__container">
        <Button
          className="button--purple"
          handler={() =>
            setPixelsType(pixelsType === "Grouped" ? "Single" : "Grouped")
          }
        >
          {pixelsType} pixels
        </Button>
        <canvas
          ref={canvasRef}
          width={1024}
          height={650}
          style={{ maxWidth: "100%" }}
        />
        {pixelsType === "Grouped"
          ? !isClosed(selectedPixels) && (
              <div className="mapSteps__alert">
                Select different area or switch mode to ungrouped
              </div>
            )
          : null}
        {selectedPixels.length ? (
          <Button
            className="button--purple"
            handler={() => setSelectedPixels([])}
          >
            Clear pixels
          </Button>
        ) : null}
      </div>
    </PopUp>
  );
};

export default index;
