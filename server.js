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

app.listen(3000,()=>{
    console.log('app is running');
})