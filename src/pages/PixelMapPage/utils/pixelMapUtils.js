/**
 * Утиліти для роботи з pixel map
 */

/**
 * Перевіряє, чи формують пікселі замкнену прямокутну область
 * @param {Array} pixels - масив пікселів
 * @returns {boolean}
 */
export const isClosedArea = (pixels) => {
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

/**
 * Підраховує кількість пікселів по країнах
 * @param {Array} pixels - масив пікселів
 * @returns {Object} об'єкт з країнами та кількістю пікселів
 */
export const getPixelsByCountry = (pixels) => {
  const countryMap = {};

  pixels.forEach((pixel) => {
    if (pixel.country) {
      if (!countryMap[pixel.country]) {
        countryMap[pixel.country] = {
          name: pixel.country,
          id: pixel.countryID,
          count: 0,
        };
      }
      countryMap[pixel.country].count++;
    }
  });

  return Object.values(countryMap);
};

/**
 * Експортує пікселі в JSON формат
 * @param {Array} pixels - масив пікселів
 * @returns {string} JSON строка
 */
export const exportPixelsToJSON = (pixels) => {
  return JSON.stringify(pixels, null, 2);
};

/**
 * Імпортує пікселі з JSON строки
 * @param {string} jsonString - JSON строка
 * @returns {Array} масив пікселів
 */
export const importPixelsFromJSON = (jsonString) => {
  try {
    const pixels = JSON.parse(jsonString);
    if (!Array.isArray(pixels)) {
      throw new Error("Invalid format: expected array");
    }
    return pixels;
  } catch (error) {
    console.error("Error importing pixels:", error);
    return [];
  }
};

/**
 * Знаходить границі вибраних пікселів
 * @param {Array} pixels - масив пікселів
 * @returns {Object} об'єкт з границями {minX, maxX, minY, maxY, width, height}
 */
export const getPixelsBounds = (pixels) => {
  if (pixels.length === 0) {
    return { minX: 0, maxX: 0, minY: 0, maxY: 0, width: 0, height: 0 };
  }

  const xValues = pixels.map((pixel) => pixel.x);
  const yValues = pixels.map((pixel) => pixel.y);

  const minX = Math.min(...xValues);
  const maxX = Math.max(...xValues);
  const minY = Math.min(...yValues);
  const maxY = Math.max(...yValues);

  return {
    minX,
    maxX,
    minY,
    maxY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
};

/**
 * Видаляє дублікати пікселів
 * @param {Array} pixels - масив пікселів
 * @returns {Array} масив унікальних пікселів
 */
export const removeDuplicatePixels = (pixels) => {
  const uniquePixels = [];
  const pixelSet = new Set();

  pixels.forEach((pixel) => {
    const key = `${pixel.x},${pixel.y}`;
    if (!pixelSet.has(key)) {
      pixelSet.add(key);
      uniquePixels.push(pixel);
    }
  });

  return uniquePixels;
};

/**
 * Обчислює центр вибраних пікселів
 * @param {Array} pixels - масив пікселів
 * @returns {Object} об'єкт з координатами центру {x, y}
 */
export const getPixelsCenter = (pixels) => {
  if (pixels.length === 0) {
    return { x: 0, y: 0 };
  }

  const sumX = pixels.reduce((sum, pixel) => sum + pixel.x, 0);
  const sumY = pixels.reduce((sum, pixel) => sum + pixel.y, 0);

  return {
    x: Math.round(sumX / pixels.length),
    y: Math.round(sumY / pixels.length),
  };
};

/**
 * Перевіряє, чи піксель знаходиться поруч з іншим пікселем
 * @param {Object} pixel1 - перший піксель
 * @param {Object} pixel2 - другий піксель
 * @returns {boolean}
 */
export const arePixelsAdjacent = (pixel1, pixel2) => {
  const dx = Math.abs(pixel1.x - pixel2.x);
  const dy = Math.abs(pixel1.y - pixel2.y);
  return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
};

/**
 * Знаходить ізольовані групи пікселів
 * @param {Array} pixels - масив пікселів
 * @returns {Array} масив груп пікселів
 */
export const findPixelGroups = (pixels) => {
  const visited = new Set();
  const groups = [];

  const dfs = (pixel, group) => {
    const key = `${pixel.x},${pixel.y}`;
    if (visited.has(key)) return;

    visited.add(key);
    group.push(pixel);

    pixels.forEach((otherPixel) => {
      if (arePixelsAdjacent(pixel, otherPixel)) {
        dfs(otherPixel, group);
      }
    });
  };

  pixels.forEach((pixel) => {
    const key = `${pixel.x},${pixel.y}`;
    if (!visited.has(key)) {
      const group = [];
      dfs(pixel, group);
      groups.push(group);
    }
  });

  return groups;
};
