import mongoose from "mongoose";

const Username= new mongoose.Schema({


  name:{
    type:"string",
    required:true,
     trim: true
  },
  username:{
    type:"string",
    required:true,
     trim: true
  },
  email:{
    type:"string",
    required:true,
     trim: true,
      lowercase: true,
        },
  password:{
    type:"string",
    required:true,
     trim: true
  },
  image:{
    type:String,
    default:" "
  }


},{timestamps:true})
    
   const User=mongoose.model("User",Username)
   export default User