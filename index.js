const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('socket.io');
const http = require('http');
const routes = require('./routes');

let app = express();
let server = http.createServer(app);
var io = socket(server);
let port = process.env.PORT || 8000;

exports.io = io;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);


//mongoose.connect('mongodb://pgsoto:toor@ds021010.mlab.com:21010/taller', err =>{
mongoose.connect('mongodb://localhost/taller', err =>{
  if(err) {
    console.log(err);
  }
  console.log("conexion exitosa a mongo");
})

server.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log('servidor corriendo');
});
