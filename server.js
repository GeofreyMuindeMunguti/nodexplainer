const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({limit: '20mb', extended: true, parameterLimit:50000});
const http = require('http');
const server = http.createServer(app);
const environ = require('dotenv').config();
const config = require('./config');
const routes = require('./router');


const mongoose = require('mongoose');
app.use(express.urlencoded({extended: false}));

//cors
app.use(cors());

// Bordy parser
app.use(bodyParser.json({limit: '20mb'}));
app.use(urlencodedParser);


//log routes accessed
const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`);
  res.on('finish', () => {
      console.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
  });
  next()
};

app.use(logRequestStart);

// Connecting to database
mongoose.connect(config.mongo.url, {useNewUrlParser: true, useCreateIndex: true}).then(r =>{
  console.log('Database Connected...');
}).catch(r =>{ console.log('Database Not Connected!!')});

routes.register(app);

// Listening to port
server.listen(process.env.PORT, () => {
  console.log('Server running on localhost: '+process.env.PORT);
});

module.exports = app;
