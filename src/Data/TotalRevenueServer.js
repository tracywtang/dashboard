const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
mongoose.pluralize(null)
const app=express()
const port=8000
app.use(cors())

mongoose.connect('mongodb://localhost:27017',{dbName:'project4'})
    .then(()=>{console.log('connect mongodb')})
    .catch((err)=>{console.log('mongodb connection error',err)})

let mySchema=new mongoose.Schema({})
let myModel=mongoose.model('TotalRevenues',mySchema)
let myModelOrder=mongoose.model('Orders',mySchema)
let myModelRevenue=mongoose.model('Revenues',mySchema)
let myModelProfit=mongoose.model('Profits',mySchema)
let myModelOrderSta=mongoose.model('OrderStas',mySchema)

app.get('/',(req,res)=>{res.send('<h1>home</h1>')})
app.get('/api/data',(req,res)=>{myModel.find()
    .then((data)=>{res.json(data);
                    console.log('data find in mongo')})
    .catch((err)=>{console.log('data not connected'.err)})})
app.get('/api/order',(req,res)=>{myModelOrder.find()
    .then((data)=>{res.json(data);
                    console.log('data find in mongo')})
    .catch((err)=>{console.log('data not connected'.err)})})
app.get('/api/revenue',(req,res)=>{myModelRevenue.find()
    .then((data)=>{res.json(data);
                    console.log('data find in mongo')})
    .catch((err)=>{console.log('data not connected'.err)})})
app.get('/api/profit',(req,res)=>{myModelProfit.find()
    .then((data)=>{res.json(data);
                    console.log('data find in mongo')})
    .catch((err)=>{console.log('data not connected'.err)})})
app.get('/api/OrderSta',(req,res)=>{myModelOrderSta.find()
    .then((data)=>{res.json(data);
                    console.log('data find in mongo')})
    .catch((err)=>{console.log('data not connected'.err)})})
    



app.listen(port,()=>{console.log('server running at http://127.0.0.1:`${port}`')})