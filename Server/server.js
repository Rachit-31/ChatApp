//  npm install express dotenv cookie-parser bcrypt mongoose socket.io jsonwebtoken
// socket io for real time communication
// to run backend server type npm run server
import express from "express";
import dotenv from "dotenv";
import path from "path";
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import { app } from "./socket/socket.js";


import connectToMongoDb from "./db/connectToMongoDb.js";


dotenv.config();
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;


 app.use(express.json()); //to parse the incomming request with json payloads(from req.body)
 app.use(express.urlencoded({ extended: true }));
 app.use(cookieParser());   


import authRoutes from "./Routes/auth.routes.js";
import messageRoutes from "./Routes/message.routes.js"
import userRoutes from "./Routes/user.routes.js"
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});


app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`)
})