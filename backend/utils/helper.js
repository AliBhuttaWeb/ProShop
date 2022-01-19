const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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