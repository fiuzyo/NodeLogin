//------------- AUTH INDEX.JS--------------//

const express = require('express');
const joi = require('joi');
const router = express.Router();

const schema= joi.object().keys({
    username: joi.string().regex(/(^[a-zA-Z0-9_]+$)/).min(2).max(30).required(),
    password: joi.string().min(6).required()
});

router.get('/',(req,res)=>{
    res.json({
        message:"Ovdje se prijavis:)"
    });
});


router.post('/signup',async (req,res,next)=>{
    console.log('body: ', req.body);
    
    
   
    
    

});

module.exports = router;























