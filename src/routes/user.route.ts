import express from "express";
import { registerUser, loginUser, currentUser } from "../controllers/user.controllers";
import validateToken from "../middleware/validation.token";
const router = express.Router();



router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/current", validateToken, currentUser)


module.exports =  router;


