const express = require('express');
const { ApolloServer } = require( 'apollo-server-express');
const typeDefs = require( './graphql/schemas');
const resolvers = require( './graphql/resolvers');
const mongoose = require('mongoose');

const startServer = async () => {
    const app = express();

    // ApolloServer
    const server = new ApolloServer({ 
        typeDefs, 
        resolvers,
        graphiql: true, 
    });
    server.applyMiddleware({ app });

    // mongoose connection
    const url = 'mongodb://localhost:27017/mytanks';
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch( error => handleError(error));

    const port = process.env.PORT || 5000;
    app.listen( port, () => console.log(`🚀 Server is running on port ${ port }${ server.graphqlPath }`));
}
startServer();