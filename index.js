import express from 'express';
import bodyParser from 'body-parser';
import Route from './mvc/routes/route';

const app = express();

app.use(bodyParser.json());

Route(app);


// PORT
const port = process.env.PORT || 3000;

const server = app.listen(port, () => port);

export default server;
