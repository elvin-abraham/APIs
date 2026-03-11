import express from 'express';

const app=express();

const users=[
    {id:1,name:'Arun'},
    {id:2,name:'Anoop'}
]

app.get('/users',(req,res)=>{
    res.json(users);
    res.send(users);
})

app.listen(3000,()=>{
    console.log('app is running');
})