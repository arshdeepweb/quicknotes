import mongoose from "mongoose";
import { DB_NAME } from "../../constant.js";


const MongoDBConnect = async () =>{
  try {
    const response = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log("MongoDB connected ");
  } catch (error) {
    console.log("MONGODB Connection Failed : ",  error)
    process.exit(1);
  }
}

export default MongoDBConnect