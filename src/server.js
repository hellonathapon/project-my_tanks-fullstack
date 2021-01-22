const express = require('express');
const { ApolloServer } = require( 'apollo-server-express');
const typeDefs = require( './graphql/schemas');
const resolvers = require( './graphql/resolvers');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

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
    const url = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.3dmkv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    
    try{
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    }catch(err) {
        console.error(err)
    }

    const port = process.env.PORT || 5000;
    app.listen( port, () => console.log(`🚀 Server is running on port ${ port }${ server.graphqlPath }`));
}
startServer();