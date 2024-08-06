const { type } = require('express/lib/response');
const mongoose  = require('mongoose');
const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,

    },
    dob:{
        type:Date,
        default:Date.now(),
        required:true
    },
    last_name:{
        type:String,
    }
     
});

const User = mongoose.model('User',userSchema);
module.exports = User;