// const { AuthenticationError } = require('apollo-server-express')
const tanks = require('../models/Tank');

class MakeTank {
    constructor({_id, name, country}) {
        this._id = _id;
        this.name = name;
        this.country = country;
    }
}

const resolvers = {
    Query: {
        hello: () => 'Hello, what a great day to be alive hahaha :D',

        tank: async (_, { id }) => {
            try {
                const result = await tanks.find({ _id: id });
                return new MakeTank(result[0])
            }
            catch(err) {
                console.error(err)
            }
            
        },

        tanks: async () => {
            try {
                const result = await tanks.find();
                return result
            }
            catch(err) {
                console.error(err)
            }
        },

        country: async (_, { name }) => {
            try {
                const result = await tanks.find({ country: name });
                return result
            }
            catch(err) {
                console.error(err)
            }
        },
    },
    Mutation: {
        addTank: async (_, args) => {
            console.log('hi')
            const x = args.input;
            try {
                // check whether or not the input tank already existed DB.
                const exist = await tanks.findOne({ name: x.name });
                if(exist !== null) {
                    throw new Error(`Tank ${ x.name } is already existed! please try query instead.`)
                }

                // if it's brand new Tank then go ahead save it in DB.
                const res = await tanks.create({ name: x.name, country: x.country });
                return res
            }
            catch(err) {
                console.error(err)
                throw new Error(err) // send Error to client
            }

        },
    }
};
module.exports = resolvers;