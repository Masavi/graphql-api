const jwt = require('jsonwebtoken');

const createToken = (email, password) => {
    const token = jwt.sign({email, password}, process.env.JWT_SECRET);
    return token;
};

module.exports = {
    createToken,
}