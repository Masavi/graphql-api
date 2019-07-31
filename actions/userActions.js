const User = require('../models/User');

const createUser = (user) => {
    return new User(user).save();
};

const getUserByEmail = (email) => User.findOne({ email }).exec();

module.exports = {
    createUser,
    getUserByEmail,
}