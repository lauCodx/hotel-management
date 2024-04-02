import asyncHandler from 'express-async-handler';
import User from "../models/user.model";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { Request, Response } from 'express';
import { userInter } from '../interface/user.interface';



// @ desc Register user 
// @ route POST /api/user/register
// @ access public

const registerUser = asyncHandler(async (req: Request, res: Response ) => {
    console.log(req.body);

    const { username, email, password} = req.body;
    if (!username || !email || !password){
        res.status(400);
        throw new Error('All fields are mandatory')
    }

    const checkUserName = await User.findOne({ username });
    if (checkUserName){
        res.status(400);
        throw new Error ("Username already taken");
    };

    const checkUser = await User.findOne({ email });
    if (checkUser){
        res.status(400);
        throw new Error ("User already exist");
    };

    const hashPassword = await bcrypt.hash(password, 10);
    console.log('Hash Password:', hashPassword)

    const user = await User.create(
        {
            username,
            email,
            password: hashPassword
        }
    );

    if (user){
        res.status(201).
        json({
            success:true,
            message:'User created succesfully',
            data:{
                _id: user.id,
                email: user.email
            }
        })
    }else{
        res.status(400);
        throw new Error ("User data not valid")
    }
   
})

// @ desc login user 
// @ route POST /api/user/login
// @ access public

const loginUser = asyncHandler(async (req : Request, res: Response ) => {
    const { email, password} = req.body;
    if ( !email || !password){
        res.status(400);
        throw new Error ("All fields are mandatory");
    }

    const user: userInter | any = await User.findOne({ email });
    // comparing password with hashpassword
    if ( user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
           user:{
            username : user.username,
            email: user.email,
            id: user.id
           }
        }, process.env.ACCESS_TOKEN!,
        {expiresIn:'15m'}
        );
        res.status(200).json({accessToken})

    }else{
        res.status(400);
        throw new Error('Incorrect email or password!')
    }

})

// @ desc  user info
// @ route POST /api/user/current
// @ access private

const currentUser = asyncHandler(async (req : Request, res: Response ) => {
    console.log("getting user")
    res.status(200).json(res.locals.user);
})


export { registerUser, loginUser, currentUser };