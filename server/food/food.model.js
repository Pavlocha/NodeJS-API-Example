const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FoodSchema = new Schema({
    name    :   {type:  String},
    dateProd:   {type:  Date},
    dateExp :   {type:  Date},
    calories:   {type:  Number},

});

let mongo_food = mongoose.model('Food', FoodSchema);
// Export the model
module.exports = mongo_food;