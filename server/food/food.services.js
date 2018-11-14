let food_dao = require("./food.dao");

const find_all_food     =   async ()=>{
    let x = await food_dao.get_all_food() ;
    console.log(x);
    return x;
}
const add_food  =   (food)=>{
    return  food_dao.add_food(food);
}

module.exports = { find_all_food,   add_food};