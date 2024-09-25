import { FilterQuery, UpdateQuery } from 'mongoose';
import { roomTypeInterface } from '../interface/roomType.interface';
import RoomType from '../models/roomType.model'

class RoomTypes {
    async createRoomType(data:roomTypeInterface) {
        return await RoomType.create(data)
    }

    async updateRoomType(id:string, updateData:UpdateQuery<roomTypeInterface>){
        return await RoomType.findByIdAndUpdate(id, updateData, {new:true} )
    }

    async deleteRoomType(id:string){
        return await RoomType.findByIdAndDelete(id)
    }

    async findRoom (filter: FilterQuery<roomTypeInterface>){
        return await RoomType.findOne(filter)
    }
}

export default new RoomTypes