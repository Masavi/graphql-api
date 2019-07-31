require('dotenv').config()
require('./database');
const { GraphQLServer } = require('graphql-yoga');
const { makeExecutableSchema } = require("graphql-tools");
const { importSchema } = require("graphql-import");
const typeDefs = importSchema("./schema.graphql");
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const options = {
    port: 8000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
};

const server = new GraphQLServer({
  schema,
  context: req => ({...req})
});

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
);