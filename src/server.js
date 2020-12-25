const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    graphiql: true, 
});

const app = express();
server.applyMiddleware({ app });


const port = process.env.PORT || 5000;
app.listen( port, () => console.log(`Server is running on port ${ port }`) );