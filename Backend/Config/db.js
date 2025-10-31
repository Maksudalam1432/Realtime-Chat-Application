
import mongoose from "mongoose";

const connectdb=async()=>{
     try{

    await mongoose.connect(process.env.MONGO_URL)     
   
         console.log("ConnectDb Succesfully")
     }
     catch(error){
         console.log("ConnectDb failed")
     }
}


export default connectdb
