// const express=require('express')

// const app=express();

// app.get('/' , (req , res)=>{
//     res.end("hii am abhishek yadav")
// })

// app.listen(8000 , ()=>{
//    console.log("port n 8000")
// })

const express =require('express');

const app=express();

app.get('/' , (req , res)=>{
    res.end("hello from home side");
})

app.listen(8000 , ()=>{
    console.log("port no 8000")
})