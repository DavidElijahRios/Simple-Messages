const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
      _id: ID
      name: String!
      email: String!
      password: String!
      messages: [messages]
   }

   type Messages {
        content: String!
        userName: String!
        timestamps: Boolean
   }

   type Mutation {
    sendMessage()
   }

`;

// TODO: how would I put a message to a user?
module.exports = typeDefs;