const asyncHandler = require("express-async-handler");
const Hotel = require("../models/hotelModel")

// @ desc Get all rooms
// @ route GET /api/v1/rooms 
// @ access public

const getAllRooms = asyncHandler(async (req, res) => {
    res.status(200).json({msg:'Get all rooms'});
})

// @ desc Get a rooms
// @ route GET /api/v1/rooms/id
// @ access public

const getARoom = asyncHandler(async (req, res) => {
    res.status(200).json({msg:'Get all rooms'});
})

// @ desc Insert a rooms
// @ route POST /api/v1/rooms 
// @ access public

const RegARoom = asyncHandler(async (req, res) => {
    console.log('Created', req.body);
    const {name, price} = req.body;
    if (!name || !price){
        res.status(400);
        throw new Error("All field are mandatory!")
    }
    res.status(201).json({msg:'Room created successfully'});
})

// @ desc Update a rooms
// @ route PATCH /api/v1/rooms/id 
// @ access public

const updateARoom = asyncHandler(async (req, res) => {
    res.status(200).json({msg:`Updated ${req.params.id}`});
})

// @ desc Delete all rooms
// @ route DELETE /api/v1/rooms/id
// @ access public

const deleteARoom = asyncHandler(async (req, res) => {
    res.status(200).json({msg:'Get all rooms'});
})


module.exports = {
    getAllRooms,
    getARoom,
    RegARoom,
    updateARoom,
    deleteARoom
};