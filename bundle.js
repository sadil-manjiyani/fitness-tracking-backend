'use strict';

var express = require('express');
var cors = require('cors');
var knexModule = require('knex');

const router = express.Router();
router.get('/',(req,res)=>{
    return res.send("Hello World")});

const initRoute = (app) => {
    app.use('/api', router);
  };

const knexConnection = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
      database: 'fitness_tracker',
    },
  };

const app = express();
const port = process.env.PORT || 8001;
const knex = knexModule(knexConnection);

app.use(cors());
app.knexConnection = knex;
global.knexConnection = knex;

initRoute(app);
app.listen(port,()=>{
    console.log("Listnening on port ",port);
});
