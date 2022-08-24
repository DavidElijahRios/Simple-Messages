// ? do I need to bring in Messages model also? or no because it is being called in the User model?
const { Users } = require('../models');

const resolvers = {
    Query: {

    },
    // ? lost on the mutation part and not sure if I would need to $addtoSet?
    Mutation: {
        createMessage: async () => {

        },
    }
}

// ? Ask if the utils folder in the src folder queries and mutations are making our calls 
// ? to the front end? or how would I then display the backend to the front end?