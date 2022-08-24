import sharp from 'sharp';
import express from 'express';
import fs from 'fs';
import path from 'node:path';
import resize from './resize';

const checker = async (
  name: string,
  width: number,
  height: number,
  res: express.Response
):Promise<void> => {
  const newImg = path.resolve(`./nImages`, `${name}${width}x${height}.jpg`);

  const sorcImg = path.resolve(`./images`, `${name}.jpg`);

 try{
  if (fs.existsSync(newImg)) {
    return res.sendFile(newImg);
  } else {
    resize(name, width, height).pipe(res);

    await sharp(sorcImg).resize(width, height).toFile(newImg);
  }
 }catch(error){
  res.send(`
  <h1> ERROR:</h1>
  <br>
  <h2> please make sure you enter positive number in the width and height fields and value existing images  name.<br><br>
   the existing images is: <br><br>
   1.palmtunnel
   <br>
   2.santamonica
   <br><br><br>
   you entered:  <br><br>
  (${width}) for width<br>
  (${height}) for height 
  <br>
  and "${name}" and name of the images  name </h2>`)
 }
  

};

export default checker;
