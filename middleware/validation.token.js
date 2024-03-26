const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const validateToken = asyncHandler(async(req, res, next) => {
    console.log('I am functioning')
   
    let authHeader = req.headers.Authorization || req.headers.authorization;
    

    if (authHeader && authHeader.startsWith("Bearer")){
       
       let token = authHeader.split(" ")[1];
       jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
        if(err){
            res.status(401);
            throw new Error("User not authorized");
        }else{
            console.log(decoded)
        }
       })
    } next()
})

module.exports = validateToken;