const actions = require('../actions');

const signup = (_, { data }) => {
    return actions.signup(data)
                  .then( res => res)
                  .catch( err => err );
};

const login = (_, {email, password}) => {
    return actions.login(email, password)
                  .then(res => res)
                  .catch(err => err);
};

const createUser = (_, { data }) => {
    return actions.createUser(data)
                  .then( newUser => newUser )
                  .catch( err => err);
};

module.exports = {
    signup,
    login,
    createUser,
};