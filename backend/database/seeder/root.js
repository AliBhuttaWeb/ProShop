const dotenv = require('dotenv');
const ConnectDB = require('../../config/database/connection');
const products = require('../../utils/products');
const users = require('./users');
const User = require('../model/user');
const Product = require('../model/product');
const Order = require('../model/order');

dotenv.config();
ConnectDB();

const eraseData = async () => {
    await User.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    console.log("Data Erased");
    process.exit();
}

const importData = async () => {
    const importedUsers = await User.insertMany(users);
    const adminId = importedUsers[0]._id;

    const sampleProducts = products.map(product => {
        return { ...product, user: adminId };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data Imported");
    process.exit();
}

const seedData = async () => {
    try{
        // eraseData();
        importData();
    }catch(error){
        console.log("Data couldn't be seed, have a look to your code");
        process.exit(0);
    }
}

const rollbackData = async () => {
    try{
        eraseData();
    }catch(error){
        console.log("Data couldn't be roll back, have a look to your code");
        process.exit(0);
    }
}

if(process.argv[2] == "-d"){
    rollbackData();
}else{
    seedData()
}

