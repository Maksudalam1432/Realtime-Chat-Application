 import express, { Router } from "express"
import { getCurrentUser } from "../Controlles/users.js";
import isAuth from "../middleware/isAuth.js";


 const authroutes=express(Router())


 authroutes.get("/current",isAuth,getCurrentUser)



export default authroutes;