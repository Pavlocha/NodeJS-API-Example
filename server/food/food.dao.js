var Food_model  =   require("./food.model");

const add_food = (Food)=>{
    var Food_item   =   new Food_model(Food);
    console.log("This the item you are trying to add :" + Food);
    console.log(Food_item);
    Food_item.save(function (err) {
        if (err) return console.error(err);
        Console.log("Item Saved Properly  !");
      }); 
}

const get_all_food    =  ()=>{
    Food_model.find({},function(err,foods){
        if(err) throw err;
        console.log("Got inside the callback of find");
        var foodMap ={};
        foods.forEach(function(food){
            foodMap[food._id] = food;
        });
        console.log("Passed");
        return foodMap;
    } 

    );
    
}
module.exports = {  get_all_food,   
                    add_food
                }