 import express, { Router } from "express"
import { login, logout, Signup } from "../Controlles/User_Controlles.js"


 const authroute=express(Router())

 authroute.post("/Signup",Signup)
 authroute.post("/login",login)
 authroute.post("/logout",logout)



export default authroute;