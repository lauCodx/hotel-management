import { NextFunction, Request, Response } from "express";
import { roomTypeInterface } from "../interface/roomType.interface";
import { readSync } from "fs";



const roomTypeCreate = async (req:Request, res: Response, next:NextFunction) =>{
    const body: roomTypeInterface = req.body;

    try {

        if(!body){
            res.status(400);
            throw new Error ('Name is required!') 
        }

        const 
        
    } catch (error) {
        next(error)
    }
};
