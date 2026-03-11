import express from 'express';

const app=express();


app.get('/isEven/:number',(req,res)=>{
    const number=Number(req.params.number);

    let isEven= number % 2 === 0;

   
    res.json({
        number:number,
        isEven:isEven
    })
})

app.listen(3000,()=>{
    console.log('app is running');
})