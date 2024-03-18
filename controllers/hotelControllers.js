// @ desc Get all rooms
// @ route GET /api/v1/rooms 
// @ access public

const getAllRooms = (req, res) => {
    res.status(200).json({msg:'Get all rooms'});
}

// @ desc Get a rooms
// @ route GET /api/v1/rooms/id
// @ access public

const getARoom = (req, res) => {
    res.status(200).json({msg:'Get all rooms'});
}

// @ desc Insert a rooms
// @ route POST /api/v1/rooms 
// @ access public

const RegARoom = (req, res) => {
    res.status(200).json({msg:'Get all rooms'});
}

// @ desc Update a rooms
// @ route PATCH /api/v1/rooms/id 
// @ access public

const updateARoom = (req, res) => {
    res.status(201).json({msg:`Updated ${req.params.id}`});
}

// @ desc Delete all rooms
// @ route DELETE /api/v1/rooms/id
// @ access public

const deleteARoom = (req, res) => {
    res.status(200).json({msg:'Get all rooms'});
}


module.exports = {
    getAllRooms,
    getARoom,
    RegARoom,
    updateARoom,
    deleteARoom
};