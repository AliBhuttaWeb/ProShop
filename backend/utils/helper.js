const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer  = require('multer')
const path    = require('path');

exports.passwordMatched = (enteredPassword, dbPassword) => {
    const result = bcrypt.compare(enteredPassword, dbPassword);
    return result;
}

exports.generateAuthToken = (params) => {
    return jwt.sign(params, process.env.JWT_KEY,{
        expiresIn: '30d'
    });
}


exports.decodeToken = (token) => {
    return jwt.verify(token, process.env.JWT_KEY);
}

exports.encodePassword = (password) => {
    return bcrypt.hashSync(password, 10);
}

// exports.uploadFile = () => {
//     const storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, './public/uploads/images/')
//         },

//         filename: function (req, file, cb) {
//             const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9)
//             cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//         }
//     });
//     const upload = multer({ storage: storage });
//     return upload;
// }