//  npm install express dotenv cookie-parser bcrypt mongoose socket.io jsonwebtoken
// socket io for real time communication
// to run backend server type npm run server
const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const app=express();
const PORT=process.env.PORT || 5000;

app.get("/",(req,res)=>{
    // root route
    res.send("Hello world")
})

app.listen(PORT,()=>
    console.log(`Server is running on port ${PORT}`)
)