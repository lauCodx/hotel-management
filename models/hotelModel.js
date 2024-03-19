const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name:{
        type : String,
        require : [true, "Name required!"]
    },

    roomType: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Room'
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