const User = require('../models/User');

const createUser = (user) => {
    const newUser = new User(user);
    return newUser.save();
};

module.exports = {
    createUser,
}