import express from 'express';

const app=express();
app.use(express.json());

app.post('/multiply',(req,res)=>{
   let num1=Number(req.body.num1);
   let num2=Number(req.body.num2);
   let result=num1*num2;
   res.json({
    result:result
   })
})


app.listen(3000,()=>{
    console.log('app is running')
})