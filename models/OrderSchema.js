const mongoose=require('mongoose');

const schema= mongoose.Schema;
const OrderSchema=new schema({
    description: String,
    start: String,
    end: String,
    rider:String
});
module.exports=mongoose.model('order',OrderSchema);