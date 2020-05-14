const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('in middie 1');
    next();
})
app.use((req,res,next)=>{
    console.log( "middle 2");
    res.send("<p>sent</p>");
})

app.listen();