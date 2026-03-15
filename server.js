import express from 'express';

const app=express();

app.use(express.json());

app.post('/Rejin',(req,res)=>{
    let name=req.body.name;
    let age=Number(req.body.age);
    res.json({
        message:`Hello,my name is ${name} and my age is ${age}`
    })
})

app.listen(3000,()=>{
    console.log('app is running');
})