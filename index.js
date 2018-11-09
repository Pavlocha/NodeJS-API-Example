/* This file contains the general configuration of the server 
, if we want to add something globaly we generally add it here*/

const morgan    = require("morgan");  /*    Generating logs    */
const express   = require("express");
const helmet    = require("helmet");  /*     Protecting Http requests   */
const mongoose  = require("mongoose");
const mongoDb   = "mongodb://127.0.0.1/my_database";

mongoose.connect(mongoDb);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
const port    = 2000;
let app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
require("./server/app")(app);/*   Call the function we get from require and give it app as an argument    */

app.use("/", async (req, res) => {
    res.end("Express Server running");
});

app.listen(port, () => {
    console.log(`Exxpress Server listening on port ${port}`);
});