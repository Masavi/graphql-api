const jwt = require('jsonwebtoken');
const User = require('../models/User');

const createToken = (_id, email, first_name) => {
    const payload = {
        _id,
        email,
        first_name,
    }
    return jwt.sign(payload, process.env.JWT_SECRET);
};

const authUserById = (context) => {
    const Authorization = context.request.get("Authorization");
    // { Auth: "JWT KADK82kjdbafk83eb"};
    if (Authorization) {
        const token = Authorization.replace("JWT ", "");
        const { _id } = jwt.verify(token, process.env.JWT_SECRET);
        return User.findOne({ _id });
    }

    throw new Error("No estás autenticado");
}

module.exports = {
    createToken,
    authUserById,
}