let food_dao = require("./food.dao");

const find_all_food     =   async ()=>{
    let x = await food_dao.get_all_food() ;
    console.log(x);
    return x;
}

const add_food  =   (food)=>{
    return  food_dao.add_food(food);
}

const delete_food   =(foodName)=>{
    return  food_dao.delete_food(foodName);
}


module.exports = { find_all_food,
                   add_food,
                   delete_food};