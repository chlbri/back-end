import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { graphqlHTTP } from 'express-graphql';
import express from 'express';

const main = async () => {
  const app = express();

  const schema = await buildSchema({
    resolvers: [`${__dirname}/**/*.resolver.{ts,js}`],
  });

  app.use(
    graphqlHTTP({
      schema,
      graphiql: true,
    }),
  );

  app.listen(4000, () =>
    console.log('Server started on http://localhost:4000'),
  );
};

main();
