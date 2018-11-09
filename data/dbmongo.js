var mongoose = require("mongoose");
var mongoDb  = "mongodb://127.0.0.1/my_database";

mongoose.connect(mongoDb);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error",console.error.bind(console,"MongoDb connection error:"));

//Define a schema
var Schema = mongoose.Schema;


var foodSchema = new Schema({
    f_name      : String,
    f_dateExp   : Date,
    f_string    : String,
    f_dateProd  : Date,
    f_calories  : Number,

});

var foodModel = mongoose.model('foodModel', foodSchema);