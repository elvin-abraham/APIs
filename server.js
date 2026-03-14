import express from 'express';

const app=express();

app.get('/message',(req,res)=>{
    res.json({
        message:'Hello welcome'
    })
})


app.listen(3000,()=>{
    console.log('app is running')
})