import mongoose from "mongoose";
const connectToMongoDb=async()=>{
    try {
        await mongoose.connect(process.env.MONOGO_DB_URI)
        console.log("Connected to Mongodb")
    } catch (error) {
        console.log("Error connecting in Mongodb")
    }
}
export default connectToMongoDb;