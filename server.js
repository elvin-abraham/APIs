import express from 'express';

const app=express();

app.get('/sum',(req,res)=>{
   let num1=Number(req.query.num1);
   let num2=Number(req.query.num2);
   let sum=num1+num2;
   res.json({
    sum:sum
   })
})


app.listen(3000,()=>{
    console.log('app is running')
})