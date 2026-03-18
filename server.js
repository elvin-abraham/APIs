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

app.listen(3000,()=>{
    console.log('app is running');
})