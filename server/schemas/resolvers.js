// ? do I need to bring in Messages model also? or no because it is being called in the User model?
const { User, Messages } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return await User.find({}).populate('messages')
        },
        userMessages: async (parent, args) => {
         const messages = await Messages.findById(args._id)
         console.log(messages)
         return messages
        }
    },
    
    Mutation: {
        createMessage: async (parent, args) => {
             const newMessage = await Messages.create(args);
             const addToSender = await User.findOneAndUpdate(
                { _id: args.senderId },
                {
                    $addToSet: {
                       messages: newMessage._id
                    },
                },
                {
                    new: true,
                }
                );
             const addToReceiver = await User.findOneAndUpdate(
                { _id: args.receiverId },
                {
                    $addToSet: {
                     messages: newMessage._id
                    },
                },
                {
                    new: true,
                }
                );
                console.log(newMessage)
             return newMessage;
        },
        createUser: async (parent, args) => {
            const newUser = await User.create(args);
            return newUser;
        }
    }
}


module.exports = resolvers;