const bcrypt = require('bcryptjs');

const users = [
    {
        name: "Admin",
        email: "admin@proshop.com",
        password: bcrypt.hashSync("admin@proshop", 10),
        "is_admin": true
    },
    {
        name: "User 1",
        email: "user1@proshop.com",
        password: bcrypt.hashSync("user@proshop", 10),
        "is_admin": false
    },
    {
        name: "User 2",
        email: "user2@proshop.com",
        password: bcrypt.hashSync("user@proshop", 10),
        "is_admin": false
    }
];

module.exports = users;