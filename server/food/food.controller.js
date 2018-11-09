const express = require("express");
const router  = express.Router();
const food    = require("./food.services");/*this line calls the interface that contains all the operation possible */

router.get("/",(req,res)=>{
    try{
        res.send( food.find_all_food())/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await  */
    }catch(err){
        console.log(err);
    }
});