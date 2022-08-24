import express from 'express';
const Router = express.Router();
import checker from '../imgProcesser/checker';

Router.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
  //getting the width , height and the image name from the url
  const width = parseInt(req.query.width as string) as number;
  const height = parseInt(req.query.height as string) as number ;
  const imgName = req.query.name as string;


  
    checker(imgName, width , height , res);

  

});

export default Router;
