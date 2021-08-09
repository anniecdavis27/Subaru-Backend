const mongoose = require('../db/connection');

const carsSchema = new mongoose.Schema({
    model: String,
    year: String,
    color: String,
    price: String,
    preowned: Boolean,
    imageurl: String
});

const Cars = mongoose.model('Cars', carsSchema);

module.exports = Cars;