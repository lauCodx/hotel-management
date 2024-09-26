import { FilterQuery, UpdateQuery } from 'mongoose';
import { hotelInterface } from '../interface/hotel.interface';
import hotel from '../models/hotelModel';

class HotelService {

    async regRoom( data : hotelInterface) {
        return await hotel.create(data);

    }

    async updateARoom (id: string, updateData: UpdateQuery < hotelInterface >){
        return await hotel.findByIdAndUpdate(id, updateData,{ new:true })
    }

    async deleteARoom (id : string){
        return await hotel.findByIdAndDelete (id);
    }

    async getARoom (id : FilterQuery<hotelInterface>){
        return await hotel.findOne(id);
    }

    async getAllRooms (filter : FilterQuery <hotelInterface>){
        return await hotel.find(filter).populate('roomType')
    }
}

export default new HotelService