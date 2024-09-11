import express from "express";
const router = express.Router();

import {
  getAllRooms,
  // getARoom,
  RegARoom,
  updateARoom,
  deleteARoom,
  getRoom,
} from "../controllers/hotelControllers";

import validateToken from "../middleware/validation.token";
import { restrict } from "../middleware/role";

router.use(validateToken);

router.route("/").get(getAllRooms).post(RegARoom);
router.route("/:id").patch(updateARoom).delete(restrict('admin'), deleteARoom).get(getRoom);


module.exports = router;
