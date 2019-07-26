const actions = require('../actions');

const hello = (_, args) => {
    return actions.hello();
}

module.exports = {
    hello,
}
