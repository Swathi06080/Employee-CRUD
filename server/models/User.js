import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:["admin","employee"]},
    profileImage:{type:String},
    createAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},

})

const User=mongoose.model("User",userschema)
export default User