import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";
import { userInter } from "../interface/user.interface";

const validateToken = asyncHandler(async (req:Request, res: Response, next:NextFunction) => {
    console.log ('I am functioning')
    // let token : string;
    let authHeader: string | any = req.headers.authorization || req.headers.authorization;
    

    if (authHeader && authHeader.startsWith("Bearer")){
        const token = authHeader.replace("Bearer ", "");

        if (!token){
            res.status(401).send("Invalid user")
        }
        const decoded: any = jwt.verify(token, process.env.ACCESS_TOKEN!);

        res.locals.user = decoded.user;
        next();
       
    } 
   
})

export default validateToken;