import asyncHandler from "express-async-handler";
import Hotel from "../models/hotelModel"
import { Request, Response } from "express";
import { hotelInterface } from "../interface/hotel.interface";
import hotelService from "../service/hotel.service";

// @ desc Get all rooms
// @ route GET /api/v1/rooms 
// @ access private

const getAllRooms = asyncHandler(async (req: Request, res : Response) => {
    const userId = res.locals.user.id;
    const hotel = await hotelService.getAllRooms({user_id: userId})
    res.status(200).json(hotel);
})

// @ desc Get a rooms
// @ route GET /api/v1/rooms/id
// @ access private

// const getARoom = asyncHandler(async (req : Request, res: Response) => {
//     const roomId = req.params.id;
//     const hotel = await hotelService.getARooms({_id:roomId});
//     if( !hotel){
//         res.status(404);
//         throw new Error('Room not found')
//     };

//     const { search, roomType, minPrice, maxPrice} = req.query;
//     // when maxPrice is passed and minPrice = 0
//     if (maxPrice && !minPrice){
//         minPrice = 0;
//     };

//     // Filter object
//     const filter = {};

//     if (search){
//         filter.name ={ $regex: new RegExp(search), $options: 'i' };
//     };

//     if (roomType) {
//         filter.roomType = roomType;
//     };
  
//     if (minPrice || maxPrice) {
//         filter.price = {};
//     };
  
//     if (minPrice) {
//         filter.price.$gte = minPrice; // greater than or equal to minPrice
//     };
  
//     if (maxPrice) {
//         filter.price.$lte = maxPrice; // less than or equal to maxPrice
//     };

//     const hotelFilter = await Hotel.find(filter);
  
    
//     res.status(200).json(hotelFilter);
// })

// @ desc Insert a rooms
// @ route POST /api/v1/rooms 
// @ access public

const RegARoom = asyncHandler(async (req: Request, res : Response) => {
   
    console.log ('Created', req.body);
    const body:hotelInterface = req.body;

    if (!body){
        res.status(400);
        throw new Error("All field are mandatory!")
    };
    
    const checkHotel = await hotelService.getARooms({ name:body.name });
    if( checkHotel ){
        res.status(400);
        throw new Error('Room already exist')
    };

   
    const hotel = await hotelService.regRoom(body)
    res.status(201).json(
        {
            success: true,
            message: "Created successfully",
            data: hotel
        }
    );
})


// @ desc Update a rooms
// @ route PATCH /api/v1/rooms/id 
// @ access public

const updateARoom = asyncHandler(async (req: Request, res : Response) => {
    const roomId = req.params.id;
    const updateData = req.body;
    const hotel = await hotelService.getARooms({_id:roomId});
    if( !hotel){
        res.status(404);
        throw new Error('Room not found')
    };


    const updateRoom = await hotelService.updateARoom( roomId, updateData);
    res.status(200).json(
        {
            success: true,
            message: "Updated successfully",
            data: updateRoom
        }
    );
})

// @ desc Delete all rooms
// @ route DELETE /api/v1/rooms/id
// @ access public

const deleteARoom = asyncHandler(async (req: Request, res : Response) => {
    const roomId = req.params.id;
    const hotel = await hotelService.getARooms({_id: roomId});
    if( !hotel){
        res.status(404);
        throw new Error('Room not found')
    };

    await hotelService.deleteARoom(roomId)
    res.status(200).json(hotel);
})


export {
    getAllRooms,
    // getARoom,
    RegARoom,
    updateARoom,
    deleteARoom
};