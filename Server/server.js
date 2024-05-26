//  npm install express dotenv cookie-parser bcrypt mongoose socket.io jsonwebtoken
// socket io for real time communication
// to run backend server type npm run server
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT=process.env.PORT || 5000;


const app=express();

import authRoutes from "../Server/Routes/auth.routes.js"


app.get("/",(req,res)=>{
    // root route
    res.send("Hello world")
})



app.use("/api/auth",authRoutes);

app.listen(PORT,()=>
    console.log(`Server is running on port ${PORT}`)
)