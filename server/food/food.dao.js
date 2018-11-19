var Food_model  =   require("./food.model");

const add_food = (Food)=>{
    let Food_item = new Food_model(Food);
    Food_item.save(function (err) {
        if (err) return console.error(err);
        console.log("Item Saved");
      }); 
}

const get_all_food = async ()=>{   
    let Result = Food_model.find({}, function(err,foods){
        if(err) throw err;
        return foods;     
   });
    return Result;
}

const delete_food = (foodName)=>{
    console.log("got to the DAO LAYER the name of the object you are trying " +foodName);
    Food_model.deleteOne({name : foodName}, function(err){
        if (err) throw err;
    })
}

module.exports = {  get_all_food,   
                    add_food,
                    delete_food,
                }