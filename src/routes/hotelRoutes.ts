import express from "express";
const router = express.Router();

import {
  getAllRooms,
  // getARoom,
  RegARoom,
  updateARoom,
  deleteARoom,
} from "../controllers/hotelControllers";

import validateToken from "../middleware/validation.token";

router.use(validateToken);

router.route("/").get(getAllRooms).post(RegARoom);
router.route("/:id").patch(updateARoom).delete(deleteARoom);


module.exports = router;
