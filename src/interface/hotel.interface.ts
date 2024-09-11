import mongoose from "mongoose";
export interface hotelInterface {
    name : string;
    price: number;
    user_id:mongoose.Types.ObjectId;
}