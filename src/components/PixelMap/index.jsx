import React, { useRef, useEffect, useState, useCallback } from "react";
import "./pixelMap.scss";

const DEFAULT_COUNTRY_COLORS = {
  "#c68fd9": "Austria",
  "#cb95de": "Belgium",
  "#c993dc": "Czech Republic",
  "#cd96df": "Denmark",
  "#d29de4": "Estonia",
  "#cb95dd": "Finland",
  "#cb95de": "France",
  "#cd96df": "Germany",
  "#cd97df": "Greece",
  "#ce98e0": "Hungary",
  "#ce98e0": "Iceland",
  "#cf99e1": "Ireland",
  "#d09be2": "Italy",
  "#d29de4": "Latvia",
  "#d39ee4": "Lithuania",
  "#d49fe6": "Moldova",
  "#d5a0e6": "Netherlands",
  "#d5a1e7": "Norway",
  "#c790da": "Poland",
  "#d9a5ea": "Portugal",
  "#d7a2e8": "Romania",
  "#d7a3e8": "San Marino",
  "#ce98e0": "Slovakia",
  "#d9a5ea": "Slovenia",
  "#d9a5ea": "Spain",
  "#daa6eb": "Sweden",
  "#d09be2": "Switzerland",
  "#dba7ec": "Turkey",
  "#dba8ec": "Ukraine",
  "#dca8ed": "United Kingdom",
};

const PixelMap = ({
  imageUrl,
  isEditable = false,
  countryColors = DEFAULT_COUNTRY_COLORS,
  maxSelectionSize = 15,
  onPixelSelection = null,
  initialTool = "pan",
}) => {
  // Refs для доступу до canvas елементів
  const mainCanvasRef = useRef(null);
  const offscreenCanvasRef = useRef(document.createElement("canvas"));
  const [stampImage, setStampImage] = useState(null);
  // Refs для стану, що не викликає ре-рендер (для продуктивності)
  const cameraRef = useRef({ scale: 1, offsetX: 0, offsetY: 0 });
  const targetCameraRef = useRef({ scale: 1, offsetX: 0, offsetY: 0 });
  const isPanningRef = useRef(false);
  const panStartRef = useRef({ x: 0, y: 0 });
  const mouseMapPosRef = useRef({ x: -1, y: -1 });
  const isSelectingRef = useRef(false);
  const selectionStartRef = useRef({ x: 0, y: 0 });
  const imageDataRef = useRef(null);
  const animationFrameIdRef = useRef(null);
  const stampImageRef = useRef(null);

  // State для даних, що викликають ре-рендер (UI елементи)
  const [currentTool, setCurrentTool] = useState(initialTool);
  const [selectionArea, setSelectionArea] = useState(null);
  const [isSelectionValid, setIsSelectionValid] = useState(false);
  const [stats, setStats] = useState({
    countryPixelCounts: {},
    userCapturedByCountry: {},
  });

  const LERP_FACTOR = 0.2;

  // --- Core Drawing Logic ---

  const redraw = useCallback(() => {
    const mainCanvas = mainCanvasRef.current;
    if (!mainCanvas || !imageDataRef.current) return;

    const mainCtx = mainCanvas.getContext("2d");
    const { width, height } = mainCanvas;
    const camera = cameraRef.current;
    const imageData = imageDataRef.current;

    mainCtx.clearRect(0, 0, width, height);
    mainCtx.save();
    mainCtx.translate(camera.offsetX, camera.offsetY);
    mainCtx.scale(camera.scale, camera.scale);

    mainCtx.imageSmoothingEnabled = false;
    mainCtx.drawImage(offscreenCanvasRef.current, 0, 0);

    if (selectionArea) {
      for (
        let y = selectionArea.y;
        y < selectionArea.y + selectionArea.height;
        y++
      ) {
        for (
          let x = selectionArea.x;
          x < selectionArea.x + selectionArea.width;
          x++
        ) {
          if (x < 0 || x >= imageData.width || y < 0 || y >= imageData.height) {
            mainCtx.fillStyle = "rgba(255, 0, 0, 0.4)";
          } else {
            const index = (y * imageData.width + x) * 4;
            const [r, g, b, a] = imageData.data.slice(index, index + 4);
            if (a < 255 || (r === 255 && g === 255 && b === 255)) {
              mainCtx.fillStyle = "rgba(255, 0, 0, 0.4)";
            } else {
              mainCtx.fillStyle = "rgba(0, 150, 255, 0.3)";
            }
          }
          mainCtx.fillRect(x, y, 1, 1);
        }
      }
      mainCtx.strokeStyle = "rgba(255, 255, 255, 1)";
      mainCtx.lineWidth = 1 / camera.scale;
      mainCtx.setLineDash([4 / camera.scale, 2 / camera.scale]);
      mainCtx.strokeRect(
        selectionArea.x,
        selectionArea.y,
        selectionArea.width,
        selectionArea.height
      );
      mainCtx.setLineDash([]);
    } else if (
      mouseMapPosRef.current.x !== -1 &&
      currentTool !== "pan" &&
      isEditable
    ) {
      const { x, y } = mouseMapPosRef.current;
      if (x >= 0 && x < imageData.width && y >= 0 && y < imageData.height) {
        mainCtx.strokeStyle = "rgba(255, 255, 255, 0.9)";
        mainCtx.lineWidth = 1 / camera.scale;
        mainCtx.strokeRect(x, y, 1, 1);
      }
    }
    mainCtx.restore();
  }, [selectionArea, currentTool, isEditable]);

  const animate = useCallback(() => {
    const camera = cameraRef.current;
    const targetCamera = targetCameraRef.current;
    const scaleDiff = targetCamera.scale - camera.scale;
    const offsetXDiff = targetCamera.offsetX - camera.offsetX;
    const offsetYDiff = targetCamera.offsetY - camera.offsetY;

    if (
      Math.abs(scaleDiff) < 0.001 &&
      Math.abs(offsetXDiff) < 0.1 &&
      Math.abs(offsetYDiff) < 0.1 &&
      !isSelectingRef.current &&
      !selectionArea
    ) {
      cameraRef.current = { ...targetCamera };
      animationFrameIdRef.current = null;
      redraw();
      return;
    }

    camera.scale += scaleDiff * LERP_FACTOR;
    camera.offsetX += offsetXDiff * LERP_FACTOR;
    camera.offsetY += offsetYDiff * LERP_FACTOR;
    redraw();
    animationFrameIdRef.current = requestAnimationFrame(animate);
  }, [redraw, selectionArea]);

  const requestAnimation = useCallback(() => {
    if (!animationFrameIdRef.current) {
      animationFrameIdRef.current = requestAnimationFrame(animate);
    }
  }, [animate]);

  // --- Helper Functions ---
  const getMapCoordinates = useCallback((screenX, screenY) => {
    const camera = cameraRef.current;
    const mapX = (screenX - camera.offsetX) / camera.scale;
    const mapY = (screenY - camera.offsetY) / camera.scale;

    return { x: mapX, y: mapY };
  }, []);

  const rgbToHex = (r, g, b) =>
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toLowerCase();

  // --- Statistics Logic ---
  const updateStatsDisplay = useCallback(
    (currentCounts, capturedCounts) => {
      let html = "<h3>Статистика</h3><table>";
      html +=
        '<tr><td colspan="2" class="stat-name" style="font-weight:bold; padding-bottom:5px;">Залишилось території:</td></tr>';
      for (const hex in countryColors) {
        const name = countryColors[hex];
        const count = currentCounts[hex] || 0;
        html += `<tr><td class="stat-name">${name}:</td><td class="stat-value">${count.toLocaleString(
          "uk-UA"
        )}</td></tr>`;
      }
      html += `<tr style="border-top: 1px solid #555;"><td colspan="2" class="stat-name" style="font-weight:bold; padding-top:10px; padding-bottom:5px;">Захоплено:</td></tr>`;
      const totalCaptured = Object.values(capturedCounts).reduce(
        (sum, count) => sum + count,
        0
      );
      html += `<tr><td class="stat-name">Загалом:</td><td class="stat-value">${totalCaptured.toLocaleString(
        "uk-UA"
      )}</td></tr>`;
      for (const hex in capturedCounts) {
        if (capturedCounts[hex] > 0) {
          const countryName = countryColors[hex];
          html += `<tr class="stat-detail"><td class="stat-name">- ${countryName}:</td><td class="stat-value">${capturedCounts[
            hex
          ].toLocaleString("uk-UA")}</td></tr>`;
        }
      }
      html += "</table>";
      return html;
    },
    [countryColors]
  );

  const calculateInitialStats = useCallback(
    (imageData) => {
      const data = imageData.data;
      const initialCounts = {};
      const initialCaptured = {};

      Object.keys(countryColors).forEach((hex) => {
        initialCounts[hex] = 0;
        initialCaptured[hex] = 0;
      });

      for (let i = 0; i < data.length; i += 4) {
        const hex = rgbToHex(data[i], data[i + 1], data[i + 2]);
        if (initialCounts.hasOwnProperty(hex)) {
          initialCounts[hex]++;
        }
      }
      setStats({
        countryPixelCounts: initialCounts,
        userCapturedByCountry: initialCaptured,
      });
    },
    [countryColors]
  );

  const validateSelection = useCallback(() => {
    if (!selectionArea) {
      setIsSelectionValid(false);
      return false;
    }

    // Перевіряємо розмір вибору
    if (
      selectionArea.width > maxSelectionSize ||
      selectionArea.height > maxSelectionSize
    ) {
      setIsSelectionValid(false);
      return false;
    }

    const imageData = imageDataRef.current;
    for (
      let y = selectionArea.y;
      y < selectionArea.y + selectionArea.height;
      y++
    ) {
      for (
        let x = selectionArea.x;
        x < selectionArea.x + selectionArea.width;
        x++
      ) {
        if (x < 0 || x >= imageData.width || y < 0 || y >= imageData.height) {
          setIsSelectionValid(false);
          return false;
        }
        const index = (y * imageData.width + x) * 4;
        const [r, g, b, a] = imageData.data.slice(index, index + 4);
        if (a < 255 || (r === 255 && g === 255 && b === 255)) {
          setIsSelectionValid(false);
          return false;
        }
      }
    }
    setIsSelectionValid(true);
    return true;
  }, [selectionArea, maxSelectionSize]);

  // --- Effect for Initialization and Cleanup ---

  useEffect(() => {
    const mainCanvas = mainCanvasRef.current;
    const mainCtx = mainCanvas.getContext("2d");
    const offscreenCanvas = offscreenCanvasRef.current;
    const offscreenCtx = offscreenCanvas.getContext("2d");
    mainCtx.imageSmoothingEnabled = false;

    const baseImage = new Image();
    baseImage.crossOrigin = "Anonymous";
    baseImage.src = imageUrl;

    baseImage.onload = () => {
      offscreenCanvas.width = baseImage.width;
      offscreenCanvas.height = baseImage.height;
      offscreenCtx.drawImage(baseImage, 0, 0);

      // This is an optional step, can be removed if not needed
      // cleanupAntiAliasing(offscreenCtx, offscreenCanvas.width, offscreenCanvas.height);

      const data = offscreenCtx.getImageData(
        0,
        0,
        offscreenCanvas.width,
        offscreenCanvas.height
      );
      imageDataRef.current = data;

      calculateInitialStats(data);

      const resizeCanvas = () => {
        mainCanvas.width = mainCanvas.clientWidth;
        mainCanvas.height = mainCanvas.clientHeight;
        mainCtx.imageSmoothingEnabled = false;
        redraw();
      };

      resizeCanvas();
      cameraRef.current.offsetX =
        (mainCanvas.width - offscreenCanvas.width) / 2;
      cameraRef.current.offsetY =
        (mainCanvas.height - offscreenCanvas.height) / 2;
      targetCameraRef.current = { ...cameraRef.current };

      window.addEventListener("resize", resizeCanvas);

      redraw();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    };
  }, [imageUrl, calculateInitialStats, redraw]);

  // --- Event Handlers ---

  const handleMouseDown = (e) => {
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const startMapPos = getMapCoordinates(offsetX, offsetY);

      if (isEditable) {
        switch (currentTool) {
          case "pan":
            isPanningRef.current = true;
            panStartRef.current = { x: e.clientX, y: e.clientY };
            break;
          case "select":
            isSelectingRef.current = true;
            selectionStartRef.current = {
              x: Math.floor(Math.max(0, startMapPos.x)),
              y: Math.floor(Math.max(0, startMapPos.y)),
            };
            setSelectionArea(null);
            stampImageRef.current = null;
            setIsSelectionValid(false);
            break;
          default:
            // Default to pan if tool is not recognized
            isPanningRef.current = true;
            panStartRef.current = { x: e.clientX, y: e.clientY };
            break;
        }
      } else {
        // If not editable, only panning is allowed
        isPanningRef.current = true;
        panStartRef.current = { x: e.clientX, y: e.clientY };
      }
    } catch (error) {
      console.error("Error in handleMouseDown:", error);
    }
  };

  const handleMouseMove = (e) => {
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const currentMapPos = getMapCoordinates(offsetX, offsetY);
      mouseMapPosRef.current = {
        x: Math.floor(currentMapPos.x),
        y: Math.floor(currentMapPos.y),
      };

      if (isPanningRef.current) {
        const dx = e.clientX - panStartRef.current.x;
        const dy = e.clientY - panStartRef.current.y;
        targetCameraRef.current.offsetX += dx;
        targetCameraRef.current.offsetY += dy;
        panStartRef.current = { x: e.clientX, y: e.clientY };
      } else if (isSelectingRef.current) {
        const currentX = Math.floor(Math.max(0, currentMapPos.x));
        const currentY = Math.floor(Math.max(0, currentMapPos.y));
        const start = selectionStartRef.current;
        const sideLength =
          Math.max(Math.abs(start.x - currentX), Math.abs(start.y - currentY)) +
          1;

        // Обмежуємо розмір вибору
        const limitedSideLength = Math.min(sideLength, maxSelectionSize);
        const x =
          currentX < start.x ? start.x - limitedSideLength + 1 : start.x;
        const y =
          currentY < start.y ? start.y - limitedSideLength + 1 : start.y;
        setSelectionArea({
          x: Math.max(0, x),
          y: Math.max(0, y),
          width: limitedSideLength,
          height: limitedSideLength,
        });
      }
      requestAnimation();
    } catch (error) {
      console.error("Error in handleMouseMove:", error);
    }
  };

  const handleMouseUp = () => {
    if (isSelectingRef.current) {
      validateSelection();
    }
    isPanningRef.current = false;
    isSelectingRef.current = false;
  };

  const handleMouseLeave = () => {
    mouseMapPosRef.current = { x: -1, y: -1 };
    if (isSelectingRef.current) {
      validateSelection();
    }
    isPanningRef.current = false;
    isSelectingRef.current = false;
    requestAnimation();
  };

  const handleWheel = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const zoomIntensity = 0.15;
    const wheel = e.deltaY < 0 ? 1 : -1;
    const zoom = Math.exp(wheel * zoomIntensity);
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const oldScale = targetCameraRef.current.scale;

    targetCameraRef.current.scale = Math.max(
      0.1,
      Math.min(targetCameraRef.current.scale * zoom, 100)
    );
    targetCameraRef.current.offsetX =
      offsetX -
      (offsetX - targetCameraRef.current.offsetX) *
        (targetCameraRef.current.scale / oldScale);
    targetCameraRef.current.offsetY =
      offsetY -
      (offsetY - targetCameraRef.current.offsetY) *
        (targetCameraRef.current.scale / oldScale);
    requestAnimation();
  };
  const handleImageInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          setStampImage(img); // <-- Оновлюємо стан, а не реф
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
    e.target.value = null;
  };

  const handleConfirmPaste = () => {
    if (!selectionArea || !stampImage || !isSelectionValid) return;

    // Update stats before pasting
    const newCounts = { ...stats.countryPixelCounts };
    const newCaptured = { ...stats.userCapturedByCountry };
    const imageData = imageDataRef.current;

    for (
      let y = selectionArea.y;
      y < selectionArea.y + selectionArea.height;
      y++
    ) {
      for (
        let x = selectionArea.x;
        x < selectionArea.x + selectionArea.width;
        x++
      ) {
        if (x < 0 || x >= imageData.width || y < 0 || y >= imageData.height)
          continue;
        const index = (y * imageData.width + x) * 4;
        if (imageData.data[index + 3] === 255) {
          const hex = rgbToHex(
            imageData.data[index],
            imageData.data[index + 1],
            imageData.data[index + 2]
          );
          if (newCounts.hasOwnProperty(hex) && newCounts[hex] > 0) {
            newCounts[hex]--;
            newCaptured[hex]++;
          }
        }
      }
    }
    setStats({
      countryPixelCounts: newCounts,
      userCapturedByCountry: newCaptured,
    });

    // Paste image
    const offscreenCtx = offscreenCanvasRef.current.getContext("2d");
    offscreenCtx.drawImage(
      stampImage,
      selectionArea.x,
      selectionArea.y,
      selectionArea.width,
      selectionArea.height
    );
    imageDataRef.current = offscreenCtx.getImageData(
      0,
      0,
      offscreenCanvasRef.current.width,
      offscreenCanvasRef.current.height
    );

    handleCancelSelection();
    redraw();
  };

  const handleCancelSelection = () => {
    setSelectionArea(null);
    stampImageRef.current = null;
    setIsSelectionValid(false);
    setStampImage(null);
    redraw();
  };

  // --- Render ---

  const hasSelection = selectionArea !== null;
  const canPaste = hasSelection && stampImage !== null && isSelectionValid;

  return (
    <div className="pixel-map-wrapper">
      <div
        id="stats-panel"
        dangerouslySetInnerHTML={{
          __html: updateStatsDisplay(
            stats.countryPixelCounts,
            stats.userCapturedByCountry
          ),
        }}
      />

      <div
        className="pixel-map-container"
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
        }}
        onWheel={handleWheel}
      >
        <div id="info-panel">
          <div id="info-coords">
            {mouseMapPosRef.current.x !== -1 &&
              `X: ${mouseMapPosRef.current.x}, Y: ${mouseMapPosRef.current.y}`}
          </div>
          <div id="info-selection">
            {selectionArea &&
              `Size: ${selectionArea.width}x${selectionArea.height} (${(
                selectionArea.width * selectionArea.height
              ).toLocaleString("uk-UA")} px)`}
          </div>
          <div id="info-validity">
            {selectionArea && !isSelectionValid ? "Cannot paste on ocean!" : ""}
            {selectionArea && selectionArea.width > maxSelectionSize
              ? `Maximum size: ${maxSelectionSize}x${maxSelectionSize}`
              : ""}
          </div>
          <div id="info-limit">
            Maximum selection: {maxSelectionSize}x{maxSelectionSize} pixels
          </div>
        </div>

        {isEditable && (
          <div className="toolbar">
            <button
              onClick={() => setCurrentTool("pan")}
              className={currentTool === "pan" ? "active" : ""}
              title="Pan Tool"
            >
              ✋
            </button>
            <button
              onClick={() => setCurrentTool("select")}
              className={currentTool === "select" ? "active" : ""}
              title="Selection Tool"
            >
              ⬚
            </button>
            <input
              type="file"
              id="image-input"
              accept="image/*"
              onChange={handleImageInputChange}
              style={{ display: "none" }}
            />
            <button
              onClick={() => document.getElementById("image-input").click()}
              disabled={!hasSelection}
              title="Choose image to paste"
            >
              Choose File...
            </button>
            <button
              onClick={handleConfirmPaste}
              disabled={!canPaste}
              title="Paste selected image"
            >
              Paste
            </button>
            <button
              onClick={handleCancelSelection}
              disabled={!hasSelection}
              title="Cancel selection (Esc)"
            >
              Cancel
            </button>
          </div>
        )}

        <canvas
          ref={mainCanvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            cursor: isEditable && currentTool !== "pan" ? "crosshair" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onWheel={handleWheel}
        />
      </div>
    </div>
  );
};

export default PixelMap;
