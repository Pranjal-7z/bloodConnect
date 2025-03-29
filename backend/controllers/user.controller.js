const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');
const blacklistTokenModel=require('../models/blacklistToken.model');
const jwt = require('jsonwebtoken');

module.exports.registerUser=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {fullname,email,password,lastDonation,totalDonation,bloodGroup,mobileNo,gender}=req.body;
    const hashedPassword=await userModel.hashPassword(password);
    const user=await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword,
        lastDonation,
        totalDonation,
        bloodGroup,
        mobileNo,
        gender

    });
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    
    res.status(201).json({token,user});
}

module.exports.loginUser=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password}=req.body;
    const user= await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message:'Invalid email or password'});
    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:'Invalid email or password'});
    }
    const token = user.generateAuthToken();
    res.cookie('token',token)
    res.status(200).json({token,user});
}


module.exports.getAllDonors = async (req, res) => {
    try {
        const donors = await userModel.find({ bloodGroup: { $exists: true } }); // Fetch only donors
        res.json(donors);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch donors' });
    }
};
module.exports.getAllDonors = async (req, res) => {
    try {
        const donors = await userModel.find({ bloodGroup: { $exists: true } }); // Fetch users with blood groups
        res.status(200).json(donors);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch donors", details: error.message });
    }
};

module.exports.getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user);
    
   
}
module.exports.deleteDonor = async (req, res) => {
    try {
      const { id } = req.params;
      const donor = await userModel.findByIdAndDelete(id);
  
      if (!donor) {
        return res.status(404).json({ message: "Donor not found" });
      }
  
      res.status(200).json({ message: "Donor deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete donor" });
    }
  };
  

module.exports.logoutUser=async(req,res,next)=>{

    res.clearCookie('token');
    const token=req.cookies.token||req.headers.authorization.split(' ')[1];
    await blacklistTokenModel.create({token});
    res.status(200).json({message:'Logged out '});
}
