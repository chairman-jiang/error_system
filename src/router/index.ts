import app from '../app';
const { graphqlHTTP } = require('express-graphql');
// import * as controller from '../controller';
import * as model from '../model';

app.use('/errors', graphqlHTTP({
  schema: model.userSchema,
  graphiql: false
}));
