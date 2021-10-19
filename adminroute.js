const express=require('express');
const router=express.Router();
const Order=require('./models/OrderSchema');


router.get('/',(req,res)=>{
    res.render('newOrder',{who:'admin'})

})

module.exports=router;