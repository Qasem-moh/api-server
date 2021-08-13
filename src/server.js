'use strict'

const express=require('express');
const logger =require('./middleware/logger')
// const errorHandler=require('./error-handlers/500')
const routeNotFound=require('./error-handlers/404')
const customerRoutes = require('./routes/customer');
const foodRoutes = require('./routes/food');
const app=express();
app.use(express.json())

app.use(logger)


app.get('/',(req,res)=>{
    res.send('hello')
})
app.post('/bad', (req,res)=> {
    let number = 12;
    number.map(x=> console.log(x));
    res.send('this Bad Route ');
})
app.use(customerRoutes);
app.use(foodRoutes);

const start=(port)=> {
    app.listen(port, ()=> console.log(`Server is Running on Port ${port}`))
}
// app.use(errorHandler)
app.use('*',routeNotFound)
module.exports={
    app:app,
    start:start}

