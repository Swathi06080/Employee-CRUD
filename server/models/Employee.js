import mongoose from 'mongoose'
import { Schema} from 'mongoose'

const employeeSchema = new Schema({
    userId :{type:Schema.Types.ObjectId,ref:"User",required:true},
    name:{type:String  ,required:true},
    profileImage:{type:String},
    email:{type:String, required:true},
    mobileno:{type:Number},
    designation:{type:String},
    gender:{type:String},
    course:{type:String},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
})

const Employee = mongoose.model("Employee",employeeSchema)
export default Employee