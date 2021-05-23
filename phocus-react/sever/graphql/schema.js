const {buildSchema} = require('graphql')

module.exports = buildSchema(`
type User {
    cognitoId: String!
    createdAt: String!
    email: String!
    firstName: String!
    id: ID!
    lastName: String!
    updatedAt: String!
}

enum TicketStatus {
    DONE
    INPROGRESS
    TODO
}

type Board {
    createdAt: String!
    id: ID!
    name: String!
    tickets: [Ticket!]!
    updatedAt: String!
}

type Ticket {
    board: Board!
    createdAt: String!
    description: String!
    id: ID!
    name: String!
    status: TicketStatus!
    updatedAt: String!
    visible: Boolean!
}

input BoardInput {
    name: String
}

input TicketInput {
    description: String
    name: String
    status: TicketStatus
    visible: Boolean
}

type Query {
    me: User!
    ticket(organisationId: ID! ticketId: ID!): Ticket
    board(organisationId: ID! boardId: ID!): Board
  }

type Mutation {
    deleteTicket(organisationId: ID! ticketId: ID!): Ticket!
    putBoard(organisationId: ID! boardId: ID input: BoardInput!): Board!
    putTicket(organisationId: ID! boardId: ID! ticketId: ID input: TicketInput!): Ticket!
}`
);
