const actions = require('../actions');

const signup = (_, { email, password }) => {
    return actions.signup(email, password)
                  .then( res => res)
                  .catch( err => err );
};

const login = (_, {email, password}) => {
    return actions.login(email, password)
                  .then(res => res)
                  .catch(err => err);
};

const createUser = (_, args) => {
    return actions.createUser(args.data)
                  .then( newUser => newUser )
                  .catch( err => err);
};

module.exports = {
    signup,
    login,
    createUser,
};