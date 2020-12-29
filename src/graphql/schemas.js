const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input TankMake {
        name: String
        country: String
    }
    type Tank {
        _id: String
        name: String
        country: String
    }
    type Mutation {
        addTank ( input: TankMake ): Tank
    }
    type Query {
        hello: String
        tank (id: String!): Tank
        tanks: [ Tank ]
        country (name: String!): [ Tank ]
    }
    
`;

module.exports = typeDefs;

