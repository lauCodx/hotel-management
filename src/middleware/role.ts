import { NextFunction, Request, Response } from "express"
import { URequest } from "../interface/user.interface"

 export const restrict = (role:any) =>{
    return (req:URequest, res:Response, next:NextFunction) =>{
       try {
        if (!req.user){
            res.status(403);
            throw new Error('You are not authenticated!')
        };

        if (req.user?.role !== role){
            res.status(403);
            throw new Error ('You do not have permission to perform this action')
        };
        next()
        
       } catch (error) {
            next(error)
       }
    }
 }

