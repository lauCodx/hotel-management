import express from 'express';
import { roomTypeCreate } from '../controllers/roomType.controller';

const route = express.Router()

route.post('/', roomTypeCreate)


export default route