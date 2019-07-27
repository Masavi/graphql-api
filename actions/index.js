const testActions = require('./testActions');
const authActions = require('./authActions');
const userActions = require('./userActions');

module.exports = {
    ...testActions,
    ...authActions,
    ...userActions,
}