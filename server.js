import express from 'express'
import mongoose from 'mongoose'

const app=express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/CarsDb").then(()=>{
    console.log("Mongodb connected");
}).catch((err)=>{
    console.log(err)
})

const carSchema=mongoose.Schema({
    Car:String,
    Brand:String,
    ProductionYear:Number
})

const Cars=mongoose.model("Cars",carSchema);

app.post('/insertcar', async (req,res)=>{
    try {
        const {Car,Brand,ProductionYear}=req.body;
        const newCar = new Cars({
            Car,
            Brand,
            ProductionYear
        })
       await  newCar.save();
       res.status(200).json({
        message:"New car entered"
       })
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})

app.listen(3000,()=>{
    console.log("app is running");
})