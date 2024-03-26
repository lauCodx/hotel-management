const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: [true, "Username needed"]
    },

    email:{
        type: String,
        require: [true, "Email required!"],
        unique: [true, "Email already exist"]
    },

    password:{
        type: String,
        require: [true, "Password needed!"],
    }
},

{
  timestamps: true
}
);

module.exports = mongoose.model ("user", userSchema)