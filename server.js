import express from 'express';

const app=express();

const users=[
    {id:1,name:'Arun'},
    {id:2,name:'Anoop'}
]

app.get('/users/:id',(req,res)=>{
    let id=Number(req.params.id);

    let user=users.find(u=> u.id === id)
    if(!user){
        res.json({
            message:"user not exists"
        })
    }
    res.json(user);
})

app.listen(3000,()=>{
    console.log('app is running');
})