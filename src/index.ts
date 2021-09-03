//const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/schema';
import { client } from '../database/db';

console.log(process.env.DB_HOST);
console.log(process.env.DB_NAME);

console.log(process.env.DB_PASS);

client.connect()
client.query('SELECT NOW()', (err, res) => {
console.log(err, res)
client.end()
})

const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then((response: object) => {
//  console.log(response);
// })

  // The `listen` method launches a web server.
  server.listen().then(({url}:{url:String}) => {
    console.log(`🚀  Server ready at ${url}`);
  });