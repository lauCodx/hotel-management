const asyncHandler = require('express-async-handler');
const User = require("../models/user.model")

// @ desc Register user 
// @ route POST /api/user/register
// @ access public

const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    
    const { username, email, password} = req.body;
    if (!username || !email || !password){
        res.status(400);
        throw new Error('All fields are mandatory')
    }

    const checkUser = await User.findOne ({ email });
    if (checkUser){
        res.status(400);
        throw new Error ("User already exist");
    };

    const user = await User.create(
        {
            username,
            email,
            password
        }
    )

    res.status(200).json({
        success:true,
        message: 'User created Succesfully',
        data : user
    });
})

// @ desc login user 
// @ route POST /api/user/login
// @ access public

const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({msg:"Login a user"});
})

// @ desc  user info
// @ route POST /api/user/current
// @ access private

const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json({msg:"User info"});
})


module.exports = { registerUser, loginUser, currentUser };