const mongoose=require('mongoose');

const schema= mongoose.Schema;
const RiderSchema=new schema({
    name: String,
    contact: Number,
    
});
module.exports=mongoose.model('rider',RiderSchema);