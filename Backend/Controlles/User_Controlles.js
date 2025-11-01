import gentoken from "../Config/token.js";
import User from "../Models/User.js";
import bcrypt from  "bcryptjs"
import cookie from "cookie-parser"

export const Signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const checkEmail = await User.findOne({email});
    if (checkEmail) {
       return res.status(400).json({ message: "Email is already registered" });
    }

    if (name.length < 3) {
      return res.status(400).send("Name must be at least 3 characters");
    }

    if (username.length < 5) {
      return res.status(400).send("Username must be at least 5 characters");
    }

    if (password.length < 6) {
      return res.status(400).send("Password must be at least 6 characters");
    }
  const  salt=await bcrypt.genSalt(10)
    const hashpassword= await bcrypt.hash(password,salt)

     const newuser=await User.create({
         name,
         username,
         email,
         password:hashpassword
     })
  
     const token= gentoken(newuser._id)

     res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      maxAge:7*24*60*60*1000,
        sameSite: "strict" 
      
     })

     res.status(201).json({
      message: "User registered successfully",
      newuser: {
      name,
      username,
      email
      },
    });

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};


export const login = async(req,res)=>{
   
  try{

    const {email ,password}=req.body;

    if(!email || !password){
      res.status(401).json({message:"All fields are required"})
    }
    const users=await User.findOne({email})

    if(!users){
      res.status(400).json({message:"Email not registered. Please sign up first."})
    }

    const matchpassword=await bcrypt.compare(password,users.password)

    if(!matchpassword){
            res.status(400).json({message:"Incorrect password. Please try again."})

    }

    const token=gentoken(users._id)
    res.cookie("token",token,{
      httpOnly:true,
      sameSite:"strict",
      maxAge:7*24*60*60*1000,
      secure:false
    })
 res.status(200).json({
      message: "Login successfully",
      user: {
      name:users.name,
       username:users.username,
      email:users.email
      },
    });


  }
  catch(error){
     res.status(401).json({message:"internal  server error"})
  }
}

export const logout = async (req,res)=>{
  try{

    res.clearCookie('toekn')
    res.status(200).json({message:"User Logout Succesfully"})
  } catch(error){
    res.status(400).json({message:"Internal Server error"})
  }
}