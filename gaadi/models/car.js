
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var carSchema = new mongoose.Schema({
    model_name: String,
    brand: String, 
    varient: String,
    Mileage: Number,
    min_price:Number,
    image: string,
    max_price:Number,
    engine: Number,
    anti_lock: String,
    airbag: String,
    turbo_charger: String,
    integrated: String,
    usb: String,
    din: String,
    launch_year: Number
});

// Return model
module.exports = restful.model('cars', carSchema);
