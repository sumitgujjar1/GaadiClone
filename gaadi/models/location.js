
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var locationSchema = new mongoose.Schema({
    city: String
});

// Return model
module.exports = restful.model('location', locationSchema);
