const bcrypt = require('bcrypt');
const { createUser, getUserByEmail } = require('./userActions');
const { createToken } = require('../utils');

const signup = (email, password) => {
    return new Promise((resolve, reject) => {
        createUser({email, password})
            .then( user => {
                resolve({
                    message: 'Signup exitoso',
                    token: createToken(user._id, user.email, user.first_name)})
            })
            .catch( err => {
                reject({ 
                    message: 'Error',
                    token: err});
            });
    });
}

const login = (email, password) => {
    return new Promise((resolve, reject) => {
        getUserByEmail(email)
            .then( user => {
                    if (!user) {
                        reject({
                        message: 'Usuario no encontrado',
                        token: null })
                    }
                    bcrypt.compare(password, user.password, (err, isValid) => {
                        if (err) reject({ message: "Hubo un error", token: err}) 
                        else if (isValid) {
                        resolve({
                            message: 'Login exitoso',
                            token: createToken(user._id, user.email, user.first_name)});
                        }
                    })
                })
            })
            .catch( err => ({ message: 'Hubo un error', token: err}));
};

module.exports = {
    signup,
    login,
}