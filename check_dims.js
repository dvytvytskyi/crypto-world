const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function checkDims() {
    try {
        const oldMapPath = path.join(process.cwd(), 'crypto-world/public/assets/PixelMap/world.png');
        const newMapPath = path.join(process.cwd(), 'crypto-world/public/assets/PixelMap/16 Jan 2026 - Final MAP 1 (500 DPI).png');

        const oldImg = await loadImage(oldMapPath);
        console.log(`Old Map: ${oldImg.width}x${oldImg.height}`);

        const newImg = await loadImage(newMapPath);
        console.log(`New Map: ${newImg.width}x${newImg.height}`);

        console.log(`Scale Factor X: ${newImg.width / oldImg.width}`);
        console.log(`Scale Factor Y: ${newImg.height / oldImg.height}`);

    } catch (e) {
        console.error(e);
    }
}

checkDims();
