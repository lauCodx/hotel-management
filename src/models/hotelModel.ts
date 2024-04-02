import mongoose from "mongoose";
import { v4 as uuid } from 'uuid';

const hotelSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'user'
    },

    name:{
        type : String,
        require : [true, "Name required!"]
    },

    roomType: {
        type : String,
        default : uuid(),
        require : true

    },

    price: {
        type : Number,
        require : [true, "Enter price!"]
    }
},
{
    timestamps : true
}
);

const Hotel = mongoose.model('hotel', hotelSchema);

export default Hotel;