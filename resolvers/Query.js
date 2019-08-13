const actions = require('../actions');

const hello = (_, args) => {
    return actions.hello();
}

const getUsers = (_, args, context) => {
    return actions.getUsers()
                  .then( res => res)
                  .catch( err => err);
}

const getUser = (_, {id}) => {
    return actions.getUser(id)
                  .then(res => res)
                  .catch(err => err);
}

module.exports = {
    hello,
    getUsers,
    getUser,
}
