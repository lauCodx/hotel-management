import { required } from "joi";
import mongoose from "mongoose";

const RoomTypeSchema = new mongoose.Schema ({
    name :{
        type: String,
        required: true
    }

})

const RoomType = mongoose.model ('RoomTypes', RoomTypeSchema)

export default RoomType