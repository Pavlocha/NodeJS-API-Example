const express = require("express");
const router  = express.Router();
const food    = require("./food.services");/*this line calls the interface that contains all the operation possible*/

router.get("/",async (req, res)=>{
    try{
        res.send(await food.findFoods());
    }catch(err){
        console.log(err);
    }
});

router.post("/",(req, res)=>{
    try{console.log("this is the message " + req.body);
        food.addFood(req.body);
    }catch(err){
        console.log(err);
    }
    res.send(req.body);
});

router.delete("/",(req, res)=>{
    try{
        food.deleteFood(req.body.name);
    }catch(err){
        console.log(err);
    }
    res.send("Deleting");
})

module.exports = router;