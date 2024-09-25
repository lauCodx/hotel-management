import { NextFunction, Request, Response } from "express";
import { roomTypeInterface } from "../interface/roomType.interface";
import RoomType from "../service/roomType.service";



export const roomTypeCreate = async (req:Request, res: Response, next:NextFunction) =>{
    const body: roomTypeInterface = req.body;
    const name = body.name

    try {

        if(!body){
            res.status(400);
            throw new Error ('Name is required!') 
        }

        const roomT = await RoomType.findRoom(name)

        if(roomT){
            res.status(400);
            throw new Error ('Room type already exist')
        }

        const roomTC = await RoomType.createRoomType(body)

        res.status(201).json(roomTC)
        
    } catch (error) {
        next(error)
    }
};
