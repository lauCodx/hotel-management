const express = require("express");
const router = express.Router();
const { 
    getAllRooms,
    getARoom,
    RegARoom,
    updateARoom,
    deleteARoom 
} = require("../controllers/hotelControllers")

router.route("/").get(getAllRooms).post(RegARoom);
router.route("/:id").patch(updateARoom).get(getARoom).delete(deleteARoom);

// router.route("/:id").get((req, res) => {
//     res.status(200).json({msg:`get room ${req.params.id}`});
// })

module.exports = router;       