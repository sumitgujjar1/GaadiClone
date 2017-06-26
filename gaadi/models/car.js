
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var carSchema = new mongoose.Schema({
    model_name: String,
    brand: String, 
    varient: String,
    Mileage: Number,
    min_price:Number
});

// Return model
module.exports = restful.model('cars', carSchema);
