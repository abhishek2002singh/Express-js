const express= require('express');

const app=express();

app.get('/' , (req , res)=>{
    res.write("<h1>hii i am abhishek yadav</h1>")
    res.write("<h1>my father name is vijay bahadur yadav</h1>")
    res.send();
})

app.get('/about' , (req ,res)=>{
    res.send("hii i am about sid ");
})



app.listen(8000, ()=>{
    console.log("port number 8000")
})