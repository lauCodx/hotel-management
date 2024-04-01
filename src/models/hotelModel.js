const mongoose = require("mongoose");
const uuid  = require('uuid');

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
        default : uuid.v4(),
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

module.exports = mongoose.model('hotel', hotelSchema);