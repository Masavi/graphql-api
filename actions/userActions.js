const User = require('../models/User');
const { storeUpload } = require('../utils');

const createUser = async (user) => {
    if ( user.profile_img ) {  
        const { createReadStream } = await user.profile_img;
        const stream = createReadStream();
        const { url } = await storeUpload(stream);
        user.profile_img = url;
    }
    return new User(user).save();
};

const getUserByEmail = (email) => User.findOne({ email }).exec();

module.exports = {
    createUser,
    getUserByEmail,
}