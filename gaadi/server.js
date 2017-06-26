
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path')
// MongoDB

mongoose.connect(process.env.OPENSHIFT_MONGODB_DB_URL || <// Your Mongo Mlab Database Url Here // > 

// Express
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api', require('./routes/api'));
//Routes for HTML5 Mode 
 app.all('/*', function(req, res) {
    res.sendfile('public/index.html');
  });

// Start server
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
, ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port, ip, function() {
  console.log('Express server listening on %d', port);
});
