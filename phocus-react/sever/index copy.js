const express = require('express')
const path = require('path')
const { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql');
// const schema = require('./graphql/schema')
// const resolver = require('./graphql/resolver')
const app = express()
// const PORT = process.env.PORT || 3000

// app.use(express.json)

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   resolver: resolver,
//   graphiql: true,
// }));


var schema = buildSchema(`
type User {
    name: String!
    age: Int!
}
type TestType {
    count: Int!
    users: [User!]!
}
type Query {
    test: TestType
  }`);
 
// The root provides a resolver function for each API endpoint

const users = [
    {name: "Max", age: 30},
    {name: "John", age: 30}
]
var root = {
    test() {
        return {
            count: Math.trunc(Math.random * 10),
            users
        };
    }
};
 
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));


app.listen(8000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

