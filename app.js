
const express = require('express');
const app = express();

const port = 8000;

app.get('/',(req,res)=>{
    res.send('hello world from onim')
})

app.listen(port,()=>{
    console.log('port is open at ${port}' )
})




