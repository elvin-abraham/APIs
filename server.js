import express from 'express';

const app=express();

app.get('/sum',(req,res)=>{
    const num1=Number(req.query.num1);
    const num2=Number(req.query.num2);
    const sum=num1+num2;
    res.json({
        result:sum
    })
})

app.listen(3000,()=>{
    console.log('app is running');
})