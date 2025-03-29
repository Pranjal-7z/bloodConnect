const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'enter a valid name'],
        },
        lastname:{
            type:String,
           
            minlength:[3,'enter a valid name'],
        }
    },
    lastDonation:{
        type:Number,
        required:true
    },
    totalDonation:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    gender:{
        
            type: String,
            enum: ["Male", "Female", "Other"],
            required: true
         
    },
    mobileNo:{
        type:Number

    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[6,'enter a valid email'],
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
        
    },

})
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}
const userModel=mongoose.model('user',userSchema);
module.exports = userModel;