const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FoodSchema = new Schema({
    name    :   {type:  String},
    dateProd:   {type:  Date},
    dateExp :   {type:  Date},
    calories:   {type:  Number},

});
 // Export the model
 module.exports = mongoose.model('Food', FoodSchema);