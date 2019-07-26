const actions = require('../actions');

const signup = (_, { email, password }) => {
    return actions.signup(email, password)
                  .then( respuesta => respuesta)
                  .catch( error => error );
}

module.exports = {
    signup,
}