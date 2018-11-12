/* This file contains the general configuration of the server 
, if we want to add something globaly we generally add it here*/

const morgan    = require("morgan");  /*    Generating logs    */
const express   = require("express");
const helmet    = require("helmet");  /*     Protecting Http requests   */
const mongoose  = require("mongoose");
const body_parser = require("body-parser");

const port    = 2000;
let app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

require("./server/app")(app);/*   Call the function we get from require and give it app as an argument    */

app.use("/", async (req, res) => {
    res.end("Express Server running");
});

app.listen(port, () => {
    console.log(`Express Server listening on port ${port}`);
});