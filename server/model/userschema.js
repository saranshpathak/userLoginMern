const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    MobileNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})
const User =  mongoose.model('userdetails',userSchema);

module.exports = User;