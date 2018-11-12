let food_dao = require("./food.dao");

const find_all_food = ()=>{
    return food_dao.get_all_food();
}
const add_food = (food)=>{
    return  food_dao.add_food(food);
}

module.exports = { find_all_food,
                add_food};