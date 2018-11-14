var Food_model  =   require("./food.model");

const add_food  =   (Food)=>{
    var Food_item   =   new Food_model(Food);
    Food_item.save(function (err) {
        if (err) return console.error(err);
        console.log("Item Saved");
      }); 
}

const get_all_food =    async ()=>{   
    let Result   =  Food_model.find({},function(err,foods){
        if(err) throw err;
        return foods;     
   });
    return Result;
}

module.exports = {  get_all_food,   
                    add_food
                }