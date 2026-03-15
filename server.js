import express from 'express';

const app=express();

app.get('/elvin',(req,res)=>{
    let name=req.query.name;
    let age=Number(req.query.age);

    res.json({
        message:`My name is ${name} and my age is ${age}`
    })
})

app.listen(3000,()=>{
    console.log('app is running');
})