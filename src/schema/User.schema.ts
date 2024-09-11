import Joi, {ObjectSchema} from "joi";

export const UserSchema:ObjectSchema = Joi.object({
    username:Joi.string().min(3).required(),
    email:Joi.string().email().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/, 'strict .com domain').required(),
    password:Joi.string().min(5).required(),
    confirmPassword:Joi.string().valid(Joi.ref('password')).required().messages({'any.only':'Passwords do not match'}),
    role:Joi.string().min(3).required()
})