const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let foodSchema = new Schema({
    name    :   {type:  String},
    dateProd:   {type:  Date},
    dateExp :   {type:  Date},
    calories:   {type:  Number},

});
 // Export the model
 module.exports = mongoose.model('Food items', foodSchema);