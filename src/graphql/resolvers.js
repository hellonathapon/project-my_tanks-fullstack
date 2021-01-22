const { UserInputError } = require('apollo-server-express')
const tanks = require('../models/Tank');

// class MakeTank {
//     constructor(result) {
//         this._id = result.id;
//         this.name = result.name;
//         this.type = result.type;
//     }
// }

const resolvers = {
    Query: {
        // tank: async (_, { id }) => {
        //     try {
        //         // parior check if it's valid id
        //         if (id.match(/^[0-9a-fA-F]{24}$/)) {
        //             const result = await tanks.find({ _id: id });
        //             // return new MakeTank(result[0]);
        //             console.log(result)
        //         }else {
        //             console.log('Not a valid id!')
        //             throw new UserInputError('Not a valid ID!')
        //         }
        //     }
        //     catch(err) {
        //         console.error(err)
        //         throw new UserInputError(err)
        //     } 
        // },
        getTankQuery: async (_, args) => {
            try {
                const result = await tanks.find({_id: args.id});
                console.log(result[0])
                return result[0]
            }
            catch(err) {
                console.error(err)
                throw new Error(err)
            }
        },

        tanks: async () => {
            try {
                const result = await tanks.find();
                return result
            }
            catch(err) {
                console.error(err)
                throw new Error(err)
            }
        },

        country: async (_, { name }) => {
            try {
                const result = await tanks.find({ country: name });
                return result
            }
            catch(err) {
                console.error(err)
                throw new Error(err)
            }
        },
    },
    // getTankQuery: async (_, args) => {
    //     console.log('im fired!')
    //     return 'hi'
    // },
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