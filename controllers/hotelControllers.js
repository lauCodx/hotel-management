const asyncHandler = require("express-async-handler");
const Hotel = require("../models/hotelModel")

// @ desc Get all rooms
// @ route GET /api/v1/rooms 
// @ access public

const getAllRooms = asyncHandler(async (req, res) => {
    const hotel = await Hotel.find()
    res.status(200).json(hotel);
})

// @ desc Get a rooms
// @ route GET /api/v1/rooms/id
// @ access public

const getARoom = asyncHandler(async (req, res) => {

    const { search, roomType, minPrice, maxPrice} = req.query;
    // when maxPrice is passed and minPrice = 0
    if (maxPrice && !minPrice){
        minPrice = 0;
    };

    // Filter object
    const filter = {};

    if (search){
        filter.name ={ $regex: new RegExp(search), $options: 'i' };
    };

    if (roomType) {
        filter.roomType = roomType;
    };
  
    if (minPrice || maxPrice) {
        filter.price = {};
    };
  
    if (minPrice) {
        filter.price.$gte = minPrice; // greater than or equal to minPrice
    };
  
    if (maxPrice) {
        filter.price.$lte = maxPrice; // less than or equal to maxPrice
    };

    const hotel = await Hotel.find(filter);
  
    
    res.status(200).json(hotel);
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
    const hotel = await Hotel.create({
        name,
        price
    })
    res.status(201).json(hotel);
})

// @ desc Update a rooms
// @ route PATCH /api/v1/rooms/id 
// @ access public

const updateARoom = asyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    if( !hotel){
        res.status(404);
        throw new Error('Room not found')
    };
    const updateRoom = await Hotel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
        );
    res.status(200).json(updateRoom);
})

// @ desc Delete all rooms
// @ route DELETE /api/v1/rooms/id
// @ access public

const deleteARoom = asyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    if( !hotel){
        res.status(404);
        throw new Error('Room not found')
    };
    await Hotel.findByIdAndDelete(hotel)
    res.status(200).json(hotel);
})


module.exports = {
    getAllRooms,
    getARoom,
    RegARoom,
    updateARoom,
    deleteARoom
};