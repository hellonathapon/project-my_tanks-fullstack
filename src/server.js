const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphql/schemas');
const resolvers = require('./graphql/resolvers');
const { MongoClient } = require('mongodb');
const assert = require('assert');

/**
 * MONGODB------------
 */
// mongodb option config
const url = 'mongodb://localhost:27017';
const dbName = 'mytanks';
const connectionOptions = {
    poolSize: process.env.MONGODB_POOLSIZE || 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
var db;

// connect to mongodb when server first start
MongoClient.connect(`${ url } ${ dbName }`, connectionOptions, function (err, database) {
    assert.strictEqual(null, err);
    console.log('Mongodb successfully connected!');

    // assign global var to the connecting database
    db = database.db('mytanks');

})

/**
 * APOLLO SERVER-----------------
 */
// instance ApolloServer by making executable modular Schemas and Resolvers 
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    graphiql: true, 
});

const app = express();
server.applyMiddleware({ app });


const port = process.env.PORT || 5000;
app.listen( port, () => console.log(`Server is running on port ${ port }`) );