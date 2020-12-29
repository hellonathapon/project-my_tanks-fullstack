const mongoose = require('mongoose');
const { Schema } = mongoose;

const tankSchema = new Schema({
    id: String,
    name: String,
    country: String,
});

const tank = mongoose.model('tank', tankSchema);
module.exports = tank;