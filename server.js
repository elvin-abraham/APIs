import express from 'express';

const app=express();

app.get('/testapi',(req,res)=>{
    res.json({
        message:"test api message"
    })
})

app.listen(3000,()=>{
    console.log('app is running');
})