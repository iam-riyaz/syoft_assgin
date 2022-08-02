const mongoose=require("mongoose")

///user Schema
// step 1 create schema
const userSchema= new mongoose.Schema({
    userName:{type:String, required:true},
    phone:{type:Number, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    role:{type:String,required:true}

},{
    timestamps:true, // created_at and updated_at
    versionKey:false

})

// step 2 create model
const User= mongoose.model("user",userSchema)

module.exports=User
