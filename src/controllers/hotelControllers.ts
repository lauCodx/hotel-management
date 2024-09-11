import asyncHandler from "express-async-handler";
import Hotel from "../models/hotelModel"
import { NextFunction, Request, Response } from "express";
import { hotelInterface } from "../interface/hotel.interface";
import hotelService from "../service/hotel.service";
import { URequest } from "../interface/user.interface";
import {ObjectId} from 'mongodb'

// @ desc Get all rooms
// @ route GET /api/v1/rooms 
// @ access private

const getAllRooms = asyncHandler(async (req: URequest, res: Response, next:NextFunction) => {
   try {

    const userId= req.user?._id;
    const hotel = await hotelService.getAllRooms({user_id:userId})

    if (hotel.length === 0){
        res.status(200).send('No room found!')
    }
    res.status(200).json({
        status: 'success',
        message: 'Rooms fetched successfully',
        noOfRooms: hotel.length,
        data:{
            rooms:hotel
        }
    });
    
   } catch (error) {
        next(error)
   }
})

// @ desc Get a rooms
// @ route GET /api/v1/rooms/id
// @ access private
export const getRoom = async (req:URequest, res: Response, next: NextFunction) =>{
    const {id} = req.params;
    const userId = req.user?._id

    try {
        
    if (!id || !userId){
        res.status(401);
        throw new Error ('Invalid IDs')
    };

    const room = await hotelService.getARoom({_id:id});

    if(!room){
        res.status(404);
        throw new Error ('Room not found')
    }
    res.status(200).json(room)

        
    } catch (error) {
        next(error)
    }
}


// @ desc Insert a rooms
// @ route POST /api/v1/rooms 
// @ access public

const RegARoom = async (req: URequest, res : Response, next:NextFunction) => {
   
    const body:hotelInterface = req.body;
    const userId = new ObjectId (req.user?._id)

    try {

        
    if (!body){
        res.status(400);
        throw new Error("All field are mandatory!")
    };
    
    const checkHotel = await hotelService.getARoom({ name:body.name });
    if( checkHotel ){
        res.status(400);
        throw new Error('Room already exist')
    };
   
    const hotel = await hotelService.regRoom({...body, user_id:userId})
    res.status(201).json(
        {
            success: true,
            message: "Created successfully",
            data: hotel
        }
    );
        
    } catch (error) {
        next(error)
    }

}


// @ desc Update a rooms
// @ route PATCH /api/v1/rooms/id 
// @ access public

const updateARoom = async (req: URequest, res : Response, next:NextFunction) => {
    const roomId = req.params.id;
    const updateData = req.body;
    const userId = req.user?._id;
   
    try {

        const hotel = await hotelService.getARoom({_id:roomId});

        if( !hotel){
            res.status(404);
            throw new Error('Room not found')
        };

        if (hotel.user_id?.toString() !== userId?.toString()){
            res.status(403);
            throw new Error ("You do not have permission to update this room")
        }
    
    
    
        const updateRoom = await hotelService.updateARoom( roomId, updateData);
        res.status(200).json(
            {
                success: true,
                message: "Updated successfully",
                data: updateRoom
            }
        );
        
    } catch (error) {
        next(error)
    }
  
}

// @ desc Delete all rooms
// @ route DELETE /api/v1/rooms/id
// @ access public

const deleteARoom = async (req: URequest, res : Response, next: NextFunction) => {
    const roomId = req.params.id;
    const userId = req.user?._id

    try {
        const hotel = await hotelService.getARoom({_id: roomId});
        if( !hotel){
            res.status(404);
            throw new Error('Room not found')
        };

        if (hotel.user_id?.toString() !== userId?.toString()){
            res.status(403);
            throw new Error ("You do not have permission to delete this room")
        }
    
        await hotelService.deleteARoom(roomId)
        res.status(200).send('Room deleted successfully');
        
    } catch (error) {
        next(error)
    }
}


export {
    getAllRooms,
    // getARoom,
    RegARoom,
    updateARoom,
    deleteARoom
};