const jwt = require('jsonwebtoken');

const signup = (email, password) => {
    const payload = {
        email,
        password,
    };

    return new Promise((resolve, reject) => {
        jwt.sign(payload, 'shh', (err, token) => {
            return err 
            ? reject({ message: 'Hubo un error', token: err })
            : resolve({ message: 'Token generado', token });
        });
    });
}

module.exports = {
    signup,
}