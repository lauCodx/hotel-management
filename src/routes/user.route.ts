import express from "express";
import { registerUser, loginUser, currentUser } from "../controllers/user.controllers";
import validateToken from "../middleware/validation.token";
import { validate } from "../middleware/validate.schema";
import { UserSchema } from "../schema/User.schema";
const router = express.Router();



router.post("/register", validate(UserSchema), registerUser)

router.post("/login", loginUser)

router.get("/current", validateToken, currentUser)


module.exports =  router;


