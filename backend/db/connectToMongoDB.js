import mongoose from "mongoose";

const connectToMongoDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("ERROR connecting to MONGOBD",error.message)
    }
}

export default connectToMongoDB;