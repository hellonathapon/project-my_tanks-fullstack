const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input TankMake {
        name: String
        country: String
    }
    type ServiceHistory {
        produced_year: String
        manufacturer: String
        place_of_origin: String
        used_by: String
    }
    type Specifications {
        mass: String
        length: String
        width: String
        height: String
        crew: String
    }
    type Armament {
        main_armament: String
        second_armament: String
        engine: String
        power: String
        operational_range: String
        maximum_speed: String
    }
    type Tank {
        _id: String
        name: String
        type: String
        service_history: ServiceHistory
        specifications: Specifications
        armament: Armament
    }
    type Mutation {
        addTank ( input: TankMake ): Tank
    }
    type Query {
        getTankQuery(id: String!): Tank
        tanks: [ Tank ]
        country (name: String!): [ Tank ]
    }
    
`;

module.exports = typeDefs;