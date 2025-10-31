import express from "express"
import dotenv from "dotenv"
import connectdb from "./Config/db.js"
import authroute from "./Routes/userRoutes.js"
import cookieParser from "cookie-parser"
const app=express()


dotenv.config()
app.use(express.json())
app.use(cookieParser())
const PORT=process.env.PORT ||4000

app.use("/",authroute)

app.listen(PORT,()=>{
      connectdb()
      console.log(`server start ${PORT} ` )
})