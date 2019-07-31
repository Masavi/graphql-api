const jwt = require('jsonwebtoken');

const createToken = (_id, email, first_name) => {
    const payload = {
        _id,
        email,
        first_name,
    }
    return jwt.sign(payload, process.env.JWT_SECRET);
};

module.exports = {
    createToken,
}