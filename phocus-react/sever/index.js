const express = require('express')
const cors = require('cors');
const path = require('path')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./graphql/schema')
const root = require('./graphql/resolver')
const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));


app.listen(PORT);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

