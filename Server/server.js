//  npm install express dotenv cookie-parser bcrypt mongoose socket.io jsonwebtoken
// socket io for real time communication
// to run backend server type npm run server
import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from 'mongoose';


import connectToMongoDb from "./db/connectToMongoDb.js";

const app=express();

dotenv.config();

const PORT = process.env.PORT || 5000;


 app.use(express.json()); //to parse the incomming request with json payloads(from req.body)
 app.use(express.urlencoded({ extended: true }));


import authRoutes from "./Routes/auth.routes.js";
app.use("/api/auth", authRoutes);



// // Logging middleware
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });

app.get("/",(req,res)=>{
    // root route
    res.send("Hello world")
})


app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`)
})