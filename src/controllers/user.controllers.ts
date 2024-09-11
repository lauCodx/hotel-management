import asyncHandler from "express-async-handler";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { URequest, userInter } from "../interface/user.interface";

// @ desc Register user
// @ route POST /api/user/register
// @ access public

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
 
  const { username, email, password, role} = req.body;


  try {
    const checkUserName = await User.findOne({ username });
    if (checkUserName) {
      res.status(400);
      throw new Error("Username already taken");
    }

    const checkUser = await User.findOne({ email });
    if (checkUser) {
      res.status(400);
      throw new Error("User already exist");
    }

    const hashPassword = await bcrypt.hash(password, 10);
   

    const user = await User.create({
      username,
      email,
      password: hashPassword,
      role
    });

      res.status(201).json({
        status: 'success',
        message: "User created succesfully",
        data: {
          _id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        },
      });

  } catch (error) {
    next(error);
  }
};

// @ desc login user
// @ route POST /api/user/login
// @ access public

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  try {
    const user: userInter | any = await User.findOne({ email });
    // comparing password with hashpassword
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            _id: user.id,
            role: user.role
          },
        },
        process.env.ACCESS_TOKEN!,
        { expiresIn: "1d" }
      );
      res.status(200).json({
        status: 'success',
        message: 'Login was successful',
        data:{
            accessToken: accessToken
        }
      });
    } else {
      res.status(400);
      throw new Error("Incorrect email or password!");
    }
  } catch (error) {
    next(error);
  }
};

// @ desc  user info
// @ route POST /api/user/current
// @ access private

const currentUser = asyncHandler(async (req: URequest, res: Response) => {
  res.status(200).json(req.user);
});

export { registerUser, loginUser, currentUser };
