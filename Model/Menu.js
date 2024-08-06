const { type } = require('express/lib/response');
const mongoose  = require('mongoose');


const menuItemSchema = new mongoose.Schema({
        name: {
            type:String,
            required : true
        },
        price:{
            type:Number,
            required: true
        },
        taste:{
            type:String,
            required:true
        },
        is_drink:{
            type:Boolean,
            default:false
        },
        ingredients:{
            type:[String],
            default:[]
        },
        num_sales:{
            type:Number,
            default:0,
        }  
});

const MenuItems = mongoose.model('MenuItems',menuItemSchema);

module.exports = MenuItems;