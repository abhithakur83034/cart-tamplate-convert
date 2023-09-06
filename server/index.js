require('dotenv').config();
const express = require('express');
// const session = require('express-session');
const config = require('./config/config.json');
const mongoose = require('mongoose');
const app = require('./app')
const http = require('http')

const server=http.createServer(app);
const PORT = process.env.PORT || 4500;
const DBConnection = process.env.LOCAL_DATABASE || config.database.mongodb.local

// app.use(session({
//     secret: process.env.SESSION_SECRET ,
//     resave: false,
//     saveUninitialized: true
//   }));





server.listen(PORT,()=>{
    console.log("server started on port :",PORT);
    mongoose.connect(DBConnection,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Connection Created")
    }).catch((error)=>{
        console.log("error in connecting with DB :",error)
})
})