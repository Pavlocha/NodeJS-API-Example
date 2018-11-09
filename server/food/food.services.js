let food_dao = require("./food.dao");

const find_all_food = ()=>{
    return await food_dao.get_all_food();
}