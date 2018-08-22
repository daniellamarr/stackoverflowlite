import Joi from 'joi';
import express from 'express';
import Route from './mvc/routes/route';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());

Route(app);


// PORT
const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

export default server;