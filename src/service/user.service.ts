import { loginInter } from "../interface/login.interface";
import { userInter } from "../interface/user.interface";
import User from "../models/user.model";



class UserService {

    async regUser(data : userInter) {

        return await User.create(data)

    };

    async loginUser(data: loginInter){
        
    }

}