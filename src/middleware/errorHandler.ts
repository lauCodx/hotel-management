import { NextFunction, Request, Response } from "express";
import { constants } from "../constants"

const errorHandler = (err: Error, req:Request, res: Response, next: NextFunction) => {
    const statusCode = res.statusCode ? res.statusCode:500;

    

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation error", message:err.message})
            break;
    
        case constants.UNAUTHORIIZE:
            res.json({title: "Unauthorize", message:err.message})
            break;
    
        case constants.FORBIDDEN:
            res.json({title: "Forbidden", message:err.message})
            break;
    
        case constants.NOT_FOUND:
            res.json({title: "Not found", message:err.message})
            break;
    
        case constants.SERVER_ERROR:
            res.json({title: "Server error", message:err.message})
            break;
    
        default:
            console.log({message: err.message});
            res.status(400).json({
                title:'Error occured',
                message: err.message
            })
            break;
    }
};


export default errorHandler;