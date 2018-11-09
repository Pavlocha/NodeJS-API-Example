let food_router = require("./food/food.controller");

let create_app =(server)=>{
    server.use("/food",food_router);
}

module.exports = create_app;