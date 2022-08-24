import sharp from 'sharp';
import fs from 'fs';
import path from 'node:path';

function resize(name: string, width: number, height: number):sharp.Sharp {
  const imgstream = fs.createReadStream(path.resolve(`./images/${name}.jpg`));

  let reziseing = sharp();

  if (width || height) {
    reziseing = reziseing.resize(width, height);
  }
  return imgstream.pipe(reziseing);
}

export default resize;
