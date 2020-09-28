var FoodModel = require("./food.model");

const addFood = (food) => {
  let foodItem = new FoodModel(food);
  foodItem.save(function (err) {
    if (err) return console.error(err);
    console.log("Item Saved");
  });
};

const getFoods = async () => {
  let result = FoodModel.find({}, function (err, foods) {
    if (err) throw err;
    return foods;
  });
  return result;
};

const deleteFood = (foodName) => {
  FoodModel.deleteOne({ name: foodName }, function (err) {
    if (err) throw err;
  });
};

module.exports = { getFoods, addFood, deleteFood };
