const resolvers = {
    Query: {
        hello: () => 'Hello, what a great day to be alive hahaha :D',
        tank: () => ({ id: 1234, name: 'hi' })
    },
};
module.exports = resolvers;