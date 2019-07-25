// module.exports = {
//     hello: (_, peticion) => `Hello ${peticion.name || 'World'}`,
// }

const hello = (_, args) => `Hello ${args.name}` || 'World';

module.exports = {
    hello,
}
