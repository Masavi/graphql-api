const actions = require('../actions');

const signup = (_, { email, password }) => {
    return actions.signup(email, password)
                  .then( respuesta => respuesta)
                  .catch( error => error );
}

const createUser = (_, args) => {
    return actions.createUser(args.data)
                  .then( newUser => newUser )
                  .catch( err => err);
}

module.exports = {
    signup,
    createUser,
}