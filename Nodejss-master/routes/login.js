const express =require("express")
const router=express.Router()
const path = require('path');
router.get("/login",(req,res)=>{

    res.send("<b> login  with success </b>")
})

router.get("/register", (req, res) => {
    const filePath = path.join(__dirname, '../index.html');
    res.sendFile(filePath);

   
})
module.exports=router