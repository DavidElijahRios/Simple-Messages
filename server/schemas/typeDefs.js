const { gql } = require('apollo-server-express');
// import { DateTimeResolver, DateTimeDefinition } from 'graphql-scalars';
// Flow in my head
// all user message rooms are stored in db
// user has message room assigned to them
const typeDefs = gql`
   type User {
      _id: ID
      name: String!
      email: String!
      password: String!
      avatar: String
      messages: [Messages]
   }


   type Messages {
       _id: ID
       messageText: String!
       senderId: String!
       receiverId: String!
       lastMessage: String
   }

   type Query {
      user: [User]
      userMessages(_id: ID!): Messages
   }

   type Mutation {
    createMessage(messageText: String!, senderId: String!, receiverId: String!, lastMessage: String): Messages
    createUser(name: String!, email: String!, password: String!, avatar: String,): User
   }

`;

// ?Check to see if my models make sense to have message sent to another user
// ? how would I write mutation to send a message to another user
module.exports = typeDefs;