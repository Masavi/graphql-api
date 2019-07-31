const bcrypt = require('bcrypt');
const User = require('../models/User');
const { createToken } = require('../utils');

const signup = (email, password) => {

    const newUser = new User({
        email,
        password,
    });

    return new Promise((resolve, reject) => {
        newUser
            .save()
            .then( () => {
                resolve({
                    message: 'Signup exitoso',
                    token: createToken(email, password)
                })
            })
            .catch( err => {
                reject({ message: 'Error', token: err});
            });
    });
}

const login = (email, password) => {
    return new Promise((resolve, reject) => {
        User.findOne({ email })
        .then( user => {
            bcrypt.compare(password, user.password, (err, isValid) => {
                if (err) reject({ message: "Hubo un error", token: err}) 
                else if (isValid) {
                resolve({
                    message: 'Login exitoso',
                    token: createToken(email, password)});
                }
            })
        })
        .catch( err => ({ message: 'Hubo un error', token: err}));
    });
}

module.exports = {
    signup,
    login,
}