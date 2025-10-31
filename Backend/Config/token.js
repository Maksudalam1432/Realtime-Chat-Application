import jwt from "jsonwebtoken"

 const gentoken = (id)=>{
    return jwt.sign({id},process.env.SECRET_KEY,{expiresIn:"7d"})

       
 }

 export default gentoken;