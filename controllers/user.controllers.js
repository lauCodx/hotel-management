const asyncHandler = require('express-async-handler');
const User = require("../models/user.model")

// @ desc Register user 
// @ route POST /api/user/register
// @ access public

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({msg:"Register a user"});
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


module.exports = { registerUser, loginUser, currentUser }