// const http = require('http');
// //let a = ()=>{
//     // //}
// http.createServer(function(req,res)=>{
//     res.write('WELCOME </h1>');
//     res.end();
// }).listen(3000);
const express = require('express');
const morgan = require('morgan');
//APP INIT
const app=express();
//First Route
app.get('/', (req,res)=>{
    res.json({message: "Welcome"})
})
app.listen('3000');