import express from 'express';
import Router from './routes/router';
const app = express();
const port = 7000;

app.use('/resize', Router);

app.listen(port, () :void => {
  console.log('server running on port:', port);
});

export default app;
