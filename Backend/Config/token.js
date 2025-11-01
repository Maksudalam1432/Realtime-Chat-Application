import jwt from "jsonwebtoken"

 const gentoken = (userid)=>{
    return jwt.sign({userid},process.env.SECRET_KEY,{expiresIn:"7d"})

       
 }

 export default gentoken;