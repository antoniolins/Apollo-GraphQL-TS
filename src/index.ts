//const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer } from "apollo-server";
import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/schema";
import { pool } from "../database/db";
import {
  createUserTable,
  createProjectTable,
  createAssignmentTable,
  addProject,
  addUser,
  addAssignment,
} from "./utils";

// createUserTable();
//addUser('Anita Lins', 'anitalins@gmail.com', 'ccc123')
//createProjectTable();{
//addProject('Onborad New Developers', 'Active');
//createAssignmentTable();
//addAssignment('fbennis@zcorp.com',1, 'Farah Bennis')

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: String }) => {
  console.log(`🚀  Server ready at ${url}`);
});
