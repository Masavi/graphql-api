const testActions = require('./testActions');
const authActions = require('./authActions');

module.exports = {
    ...testActions,
    ...authActions,
}