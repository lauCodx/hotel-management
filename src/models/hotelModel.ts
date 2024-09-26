import mongoose from "mongoose";
import { v4 as uuid } from 'uuid';

const hotelSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },

    name:{
        type : String,
        required : [true, "Name required!"],
        lowercase: true
    },

    roomType: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Room type is required'],
        ref: 'RoomTypes'
    },

    price: {
        type : Number,
        required : [true, "Enter price!"]
    }
},
{
    timestamps : true
}
);

const Hotel = mongoose.model('hotelRooms', hotelSchema);

export default Hotel;