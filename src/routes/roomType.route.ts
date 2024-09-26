import express from 'express';
import { getAllRoomType, roomTypeCreate } from '../controllers/roomType.controller';

const route = express.Router()

route.post('/', roomTypeCreate)
route.get('/getAllRoomTypes', getAllRoomType)


export default route