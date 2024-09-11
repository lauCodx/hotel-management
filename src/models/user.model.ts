import mongoose from "mongoose"





const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Username needed"]
    },

    email:{
        type: String,
        required: [true, "Email required!"],
        unique: [true, "Email already exist"]
    },

    password:{
        type: String,
        required: [true, "Password needed!"],
    },
    role:{
        type: String,
        enum:['admin', 'user'],
        default: 'user'

    }
},

{
  timestamps: true
}
);

const User = mongoose.model ("user", userSchema);

export default User;