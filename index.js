const express= require('express');
const mongoose = require('mongoose');
const app=express();
const ejsmate=require('ejs-mate');
const admin=require('./adminroute.js');
const rider=require('./riderRoute.js');
const ejsmatelayout=require('express-ejs-layouts')


const path= require('path')
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'/views'))
app.engine('ejs',ejsmate);

app.use(ejsmatelayout);
mongoose.connect('mongodb://localhost:27017/Orders', {

})
const db=mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once('open',()=>{
    console.log('database connected');
})
app.use('/admin',admin);
app.use('/rider',rider);
app.get('/', (req, res)=>{
    res.render('main',{who:'main'})
})


app.listen(3000,()=>{
    console.log("listening to port 3000....")
})