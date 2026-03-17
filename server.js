import express from 'express';

const app=express();

   const users=[
        {id:1,name:"Elvin"},
        {id:2,name:"Jithin"}
    ]

app.get('/user/:id',(req,res)=>{
    let id=Number(req.params.id);
    let user=users.find((u)=>{
        return u.id===id;
    })
    if(user){
        res.json(user)
    }else{
        res.json({
            message:"No user found"
        })
    }
})

app.listen(3000,()=>{
    console.log('app is running');
})