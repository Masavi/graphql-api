const User = require('../models/User');
const { storeUpload } = require('../utils');

const getUsers = () => {
    return User.find();
}

const createUser = async (user) => {
    if ( user.profile_img ) {  
        const { createReadStream } = await user.profile_img;
        const stream = createReadStream();
        const { url } = await storeUpload(stream);
        user.profile_img = url;
    }
    return new User(user).save();
};

const getUser = (id) => {
    return User.findById(id);
}

const getUserByEmail = (email) => User.findOne({ email }).exec();

module.exports = {
    getUser,
    getUsers,
    createUser,
    getUserByEmail,
}