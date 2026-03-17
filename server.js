import express from 'express';

const app=express();

   const users=[
        {id:1,name:"Elvin"},
        {id:2,name:"Jithin"}
    ]

app.get('/users',(req,res)=>{
    res.json(users);
})

app.listen(3000,()=>{
    console.log('app is running');
})