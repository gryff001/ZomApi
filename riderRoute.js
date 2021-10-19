const express=require('express');
const router=express.Router();
const rider=require('./models/riderSchema');


router.get('/',(req,res)=>{
    res.render('riderview',{who:'rider'})

})

module.exports=router;