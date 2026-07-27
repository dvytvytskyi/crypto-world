const fs = require('fs');
const path = require('path');

function readPngDims(filePath) {
    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(24);
    fs.readSync(fd, buffer, 0, 24, 0);
    fs.closeSync(fd);

    // Signature: 89 50 4E 47 0D 0A 1A 0A
    // Chunk Length: 00 00 00 0D (13)
    // Chunk Type: 49 48 44 52 (IHDR)
    // Width: 4 bytes
    // Height: 4 bytes

    // Offset 16 is Width
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    return { width, height };
}

try {
    const oldMapPath = path.join(process.cwd(), 'crypto-world/public/assets/PixelMap/world.png');
    const newMapPath = path.join(process.cwd(), 'crypto-world/public/assets/PixelMap/16 Jan 2026 - Final MAP 1 (500 DPI).png');

    const oldDims = readPngDims(oldMapPath);
    console.log(`Old Map: ${oldDims.width}x${oldDims.height}`);

    const newDims = readPngDims(newMapPath);
    console.log(`New Map: ${newDims.width}x${newDims.height}`);

    console.log(`Scale Factor X: ${newDims.width / oldDims.width}`);
    console.log(`Scale Factor Y: ${newDims.height / oldDims.height}`);

} catch (e) {
    console.error(e);
}
