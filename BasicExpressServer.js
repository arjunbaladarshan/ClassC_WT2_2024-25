const express = require('express');

const app = express();

const students = ['arjun','rajkot','gujarat','INDIA']

app.get('/',(req,res)=>{
    res.send(students);
});

app.post('/',(req,res)=>{
    res.send("Hello world home post")
});

app.listen(3000,()=>{
    console.log("Server started at 3000")
})