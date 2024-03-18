const asyncHandler = require("express-async-handler")

// @ desc Get all rooms
// @ route GET /api/v1/rooms 
// @ access public

const getAllRooms = async (req, res) => {
    res.status(200).json({msg:'Get all rooms'});
}

// @ desc Get a rooms
// @ route GET /api/v1/rooms/id
// @ access public

const getARoom = async (req, res) => {
    res.status(200).json({msg:'Get all rooms'});
}

// @ desc Insert a rooms
// @ route POST /api/v1/rooms 
// @ access public

const RegARoom = async (req, res) => {
    console.log('Created', req.body);
    const {name, price} = req.body;
    if (!name || !price){
        res.status(400);
        throw new Error("All field are mandatory")
    }
    res.status(201).json({msg:'Room created successfully'});
}

// @ desc Update a rooms
// @ route PATCH /api/v1/rooms/id 
// @ access public

const updateARoom = async (req, res) => {
    res.status(200).json({msg:`Updated ${req.params.id}`});
}

// @ desc Delete all rooms
// @ route DELETE /api/v1/rooms/id
// @ access public

const deleteARoom = async (req, res) => {
    res.status(200).json({msg:'Get all rooms'});
}


module.exports = {
    getAllRooms,
    getARoom,
    RegARoom,
    updateARoom,
    deleteARoom
};