import express from 'express';

const app=express();
app.use(express.json());

app.post('/multiply',(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;

    const result=num1*num2;

    res.json({
        result:result
    })
})

app.listen(3000,()=>{
    console.log('app is running');
})