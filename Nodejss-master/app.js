const express = require('express');
const app = express();
const product = require('./routes/product')
const path = require('path');
const login = require("./routes/login")
const post = require("./routes/post")


app.use('/product',product)
app.use(express.json())
app.use("/auth",login)
app.use("/post", post)

app.get('/template',(req, res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.get('/',(req,res)=>{
    res.redirect('/template')
    //res.json({message:'hello world!'})
})
app.listen(5000,()=>{
    console.log('listening on port 5000')
})