const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
     email: {
        type:String,
        required:[true,'User cannot without emailId'],
        unique:[true,'User Already exist with this email'],
        lowercase:true,
        validate : [validator.isEmail,'Please Provide Valid Email'],
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
     },
     profile :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
     },
     experience:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Experience"
     },],
     pic:{
      type:String,
     },
     coins:{
      type:Number,
      default:500
     },
     applied:[{
      type:mongoose.Schema.Types.ObjectId,
        ref:"Applied"
     },],
     role:{
      type:String,
      enum:['user','admin'],
      required:[true,"Role as user or admin must be decided here"]
     }
});


 const User = mongoose.model('User',userSchema);
 module.exports = User;