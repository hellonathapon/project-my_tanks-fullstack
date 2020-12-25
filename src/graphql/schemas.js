const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Tank {
        id: ID
        name: String
    }
    type Query {
        hello: String
        tank: Tank
    }
`;

module.exports = typeDefs;