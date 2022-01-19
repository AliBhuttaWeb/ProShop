const mongoose = require('mongoose');

const ConnectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connection established to host: ", conn.connection.host);
    }catch(error){
        console.log("Error while connecting DB");
    }
}

module.exports = ConnectDB;
