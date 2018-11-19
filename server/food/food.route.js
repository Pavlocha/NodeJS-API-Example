const express = require("express");
const router  = express.Router();
const food    = require("./food.services");/*this line calls the interface that contains all the operation possible*/

router.get("/",async (req, res)=>{
    try{
        res.send(await food.find_all_food());
    }catch(err){
        console.log(err);
    }
});

router.post("/",(req, res)=>{
    try{console.log("this is the message " + req.body);
        food.add_food(req.body);
    }catch(err){
        console.log(err);
    }
    res.send(req.body);
});

router.delete("/",(req, res)=>{
    try{
        food.delete_food(req.body.name);
    }catch(err){
        console.log(err);
    }
    res.send("Deleting");
})

module.exports = router;