const foodDao = require("./food.dao");

const findFoods = async () => {
  let x = await foodDao.getFoods();
  console.log(x);
  return x;
};

const addFood = (food) => {
  return foodDao.addFood(food);
};

const deleteFood = (foodName) => {
  return foodDao.deleteFood(foodName);
};

module.exports = { findFoods, addFood, deleteFood };
