const express=require('express')

const app=express();

app.get('/' , (req , res)=>{
    res.send("home side")
})

app.get('/about' , (req , res)=>{
    res.send("about side")
});




app.get('/content' , (req , res)=>{
    res.send("content side")
});


app.listen(8000 , ()=>{
    console.log("port no 8000")
})