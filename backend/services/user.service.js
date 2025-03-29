const userModel = require('../models/user.model');

module.exports.createUser = async ({
    firstname,
    lastname,
    email,
    password,
    mobileNo,
    totalDonation,
    lastDonation,
    bloodGroup,
    gender
})=>{
    if(!firstname || !email || !password||!lastname||!mobileNo||!totalDonation||!lastDonation||!gender||!bloodGroup){
        throw new Error('All fields are required');
    }
    const user =userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        mobileNo,
        totalDonation,
        lastDonation,
        bloodGroup,
        gender
    });
    return user;
}
