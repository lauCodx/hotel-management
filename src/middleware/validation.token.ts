import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { NextFunction, Request, Response } from "express";
import { URequest, userInter } from "../interface/user.interface";

const validateToken = asyncHandler(async (req:URequest, res: Response, next:NextFunction) => {
   
    let authHeader: string | any = req.headers [ 'authorization' ];

    if (!authHeader){
        res.status(400).send ('No authorization found ')
    }
    

    if (authHeader && authHeader.startsWith("Bearer")){
        const token = authHeader.split(" ")[1];

        if (!token){
            res.status(401).send("Not authorized")
        }
        const decoded: any = await jwt.verify(token, process.env.ACCESS_TOKEN!);

        req.user = decoded.user;
        next();
       
    } else {
        res.status(400).send('Token not valid')

    }
   
})

export default validateToken;