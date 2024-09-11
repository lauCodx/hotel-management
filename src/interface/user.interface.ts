import { Request } from "express";

export interface userInter {
username : string;
email: string;
password : string;
_id : string;
role: string;
}


export interface URequest extends Request  {
    user?: userInter 
}