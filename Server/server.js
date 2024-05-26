//  npm install express dotenv cookie-parser bcrypt mongoose socket.io jsonwebtoken
// socket io for real time communication
// to run backend server type npm run server
import express from "express";
import dotenv from "dotenv";

import authRoutes from "../Server/Routes/auth.routes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";

const app=express();
const PORT=process.env.PORT || 5000;

dotenv.config();
app.use("/api/auth",authRoutes);
app.use(express.json()); //to parse the incomming request with json payloads(from req.body)




// app.get("/",(req,res)=>{
//     // root route
//     res.send("Hello world")
// })


app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`)
})