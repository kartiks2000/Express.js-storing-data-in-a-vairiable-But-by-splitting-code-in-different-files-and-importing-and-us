
const express = require('express');

const router = express.Router();

const backprops = require('./back');


router.use('/products',(req,res,next)=>{
    // console.log("products logged!!");
    res.send("<h1>All Products are -: </h1>");
    console.log("check the console for Products....");
    backprops.allproducts.map((i)=>{
        console.log(i);
    });
    // console.log(backprops);
});

router.use("/addproduct",(req,res,next)=>{
    console.log("addproduct logged!!");
    res.send("<form action='/addpro' method='POST'><input type='text' name='proname'><input type='submit' value='ADD'></form>")
});

module.exports = {
    "router": router,
}