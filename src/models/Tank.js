const mongoose = require('mongoose');
const { Schema } = mongoose;

const tankSchema = new Schema({
    id: String,
    name: String,
    type: String,
    service_history: {
        produced_year: String,
        manufacturer: String,
        place_of_origin: String,
        used_by: String,
    },
    specifications: {
        mass: String,
        length: String,
        width: String,
        height: String,
        crew: String,
    },
    armament: {
        main_armament: String,
        second_armament: String,
        engine: String,
        power: String,
        operational_range: String,
        maximum_speed: String,
    }
});

const tank = mongoose.model('tank', tankSchema);
module.exports = tank;

/**
 * dev model for manually saving in db
 */
// {
//     "name": "IS-7",
//     "type": "Heavy tank",
//     "service_history": {
//         "produced_year": "1945 (Prototype)",
//         "manufacturer": "Nikolai Fedorovich Shashmurin",
//         "place_of_origin": "Soviet Union",
//         "used_by": "Prototype"
//     },
//     "specifications": {
//         "mass": "68 t (67 long tons; 75 short tons)",
//         "length": "36 ft 6 in (11.1 m)",
//         "width": "14 ft 11 in (4.39 m)",
//         "height": "9 ft 4 in (2.84 m)",
//         "crew": "4"
//     },
//     "armament": {
//         "main_armament": "130 mm S-70",
//         "second_armament": "2x 14.5 millimetres (0.57 in) KPVT",
//         "engine": "M50T V12 diesel",
//         "power": "5.8 hp/tonne",
//         "operational_range": "100 miles (160 km)",
//         "maximum_speed": "8 mph (13 km/h)"
//     }
// }