import express from 'express';

const app=express();


app.get('/isodd/:number',(req,res)=>{
    let number=Number(req.params.number);
    let isOdd=undefined;
    if(number%2===1){
        res.json({
            message:"This number is odd"
        })
    }else{
        res.json({
            message:'This number is even'
        })
    }
})

app.listen(3000,()=>{
    console.log('app is running');
})