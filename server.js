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

//API to enter a new car into MongoDB

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

//API to access all cars details

app.get('/allcars',async (req,res)=>{
    try {
        const allCars=await Cars.find();
        res.status(200).json({
            message:"All details accessed",
            AllCars:allCars
        })
    } catch (error) {
        res.status(500).json({
            message:"Could'nt access details",
            error:error.message
        })
    }
})

//API to access a specific car details via id

app.get('/searchedcar/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const searchedCar=await Cars.findById(id);
        res.status(200).json({
            message:"Found the searched car",
            searchedcar:searchedCar
        })
    } catch (error) {
        res.status(500).json({
            message:"Could'nt find the searched car",
            error:error.message
        })
    }
})

app.listen(3000,()=>{
    console.log("app is running");
})