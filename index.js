import express from 'express';
import cors from 'cors';
import routes from './routes/index.js'
import { knexConnection } from './config/index.js';
import knexModule from 'knex';

const app = express();
const port = process.env.PORT || 8001;
const knex = knexModule(knexConnection);

app.use(cors());
app.use(express.json());
app.knexConnection = knex;
global.knexConnection = knex;

routes(app);
app.listen(port,()=>{
    console.log("Listnening on port ",port);
})
