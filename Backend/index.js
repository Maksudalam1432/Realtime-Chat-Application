import express from "express"
import dotenv from "dotenv"
import connectdb from "./Config/db.js"
import authroute from "./Routes/userRoutes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authroutes from "./Routes/AuthRoute.js"
const app=express()


dotenv.config()
app.use(express.json())
app.use(cookieParser())
const PORT=process.env.PORT ||3000
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use("/",authroute)
app.use("/",authroutes)

app.listen(PORT,()=>{
      connectdb()
      console.log(`server start ${PORT} ` )
})