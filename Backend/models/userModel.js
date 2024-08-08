
import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    cartData:{
        type:Object,default:{},
    }
}, {minimize:false});  // this means we are intialize because we not giving any data in datacart for that we use minimize and give it as false;


const userModel = mongoose.model.user ||mongoose.model("user", userSchema);

export default userModel;