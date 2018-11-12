const express = require("express");
const router  = express.Router();
const food    = require("./food.services");/*this line calls the interface that contains all the operation possible */

router.get("/",(req,res)=>{
    try{
        let xo = food.find_all_food();
        console.log(xo);
        res.send( xo)/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await  */
    }catch(err){
        console.log(err);
    }
});

router.post("/",(req,res)=>{
    try{console.log("this is the message " + req.body);
        food.add_food(req.body);
    }catch(err){
        console.log(err);
    }
    res.send(req.body);
});

module.exports = router;