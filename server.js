// import express from 'express'
// import mongoose from 'mongoose'

// const app=express();
// app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/CarsDb").then(()=>{
//     console.log("Mongodb connected");
// }).catch((err)=>{
//     console.log(err)
// })

// const carSchema=mongoose.Schema({
//     Car:String,
//     Brand:String,
//     ProductionYear:Number
// })

// const Cars=mongoose.model("Cars",carSchema);

// //API to enter a new car into MongoDB

// app.post('/insertcar', async (req,res)=>{
//     try {
//         const {Car,Brand,ProductionYear}=req.body;
//         const newCar = new Cars({
//             Car,
//             Brand,
//             ProductionYear
//         })
//        await  newCar.save();
//        res.status(200).json({
//         message:"New car entered"
//        })
//     } catch (error) {
//         res.status(500).json({
//             message:error.message
//         })
//     }
// })

// //API to access all cars details

// app.get('/allcars',async (req,res)=>{
//     try {
//         const allCars=await Cars.find();
//         res.status(200).json({
//             message:"All details accessed",
//             AllCars:allCars
//         })
//     } catch (error) {
//         res.status(500).json({
//             message:"Could'nt access details",
//             error:error.message
//         })
//     }
// })

// //API to access a specific car details via id

// app.get('/searchedcar/:id',async (req,res)=>{
//     try {
//         const id = req.params.id;
//         const searchedCar=await Cars.findById(id);
//         res.status(200).json({
//             message:"Found the searched car",
//             searchedcar:searchedCar
//         })
//     } catch (error) {
//         res.status(500).json({
//             message:"Could'nt find the searched car",
//             error:error.message
//         })
//     }
// })

// app.listen(3000,()=>{
//     console.log("app is running");
// })


import express from 'express';
import mongoose from 'mongoose';

const app=express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/schoolDB")
.then(()=>{
    console.log("Mongodb connected")
}).catch((err)=>{
    console.log(err)
})

const studentSchema=new mongoose.Schema({
    name:String,
    age:Number,
    course:String
})

const Student=mongoose.model("Student",studentSchema)

app.post('/students',async (req,res)=>{
  try {
       const {name,age,course}=req.body;
     const newStudent=new Student({
        name,
        age,
        course
     })

     await newStudent.save();
     res.json({
        message:"Student Added",
        Details:newStudent
     })
  } catch (error) {
    res.status(500).json({
        message:"Error while adding student",
        error:error.message
    })
  }
})

app.get('/students', async (req,res)=>{
    try {
        const allStudents=await Student.find()
        res.json({
            message:"All students details retrived",
            Details:allStudents
        })
    } catch (error) {
        res.status(500).json({
            message:"Error while retrieving students data",
            error:error.message
        })
    }
})

app.get('/student/:id', async (req,res)=>{
   try {
     const id=req.params.id;
    const searchingStudent= await Student.findById(id)
    res.json({
        message:"Found the student",
        Details:searchingStudent
    })
   } catch (error) {
     res.status(500).json({
        message:"Could'nt find the student",
        error:error.message
     })
   }
})

// API to update the student details

app.put('/updatestudent/:id',async (req,res)=>{
    try {
        const id = req.params.id;
        const {name}=req.body;
        const updatedStudent= await Student.findByIdAndUpdate(
            id,
            
                {name:name},
                {new:true}
            )

            if(!updatedStudent){
                res.json({
                    message:"No updated student"
                })
            }
                    res.json({
                        message:"Student updated",
                        updatedStudent:updatedStudent
                    })
                
            
    } catch (error) {
        res.json({
            error:error.message
        })
    }
})

app.listen(3000,()=>{
    console.log('app is running');
})