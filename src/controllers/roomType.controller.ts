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

        const roomT = await RoomType.findRoom({name:name.toLowerCase()})

        if(roomT){
            res.status(400);
            throw new Error ('Room type already exist')
        }

        const roomTC = await RoomType.createRoomType(body)

        res.status(201).json({
            status: 'success',
            message:'Room type created successfully',
            data: roomTC
        })
        
    } catch (error) {
        next(error)
    }
};

export const getAllRoomType = async (req:Request, res: Response, next:NextFunction)=> {
    try {
        const roomT = await RoomType.getAllRoomTypes();
        
        if(roomT.length === 0){
            res.status(200).send('No room type found')
        }

        res.status(200).json(roomT)
    } catch (error) {
        next(error)
    }
}

