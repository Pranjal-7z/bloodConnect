const mongoose = require('mongoose');

async function  ConnectToDB(){
   await mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{
        console.log('Connected to database');
    }).catch(error => console.log(error));
}
module.exports = ConnectToDB;