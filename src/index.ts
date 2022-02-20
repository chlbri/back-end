import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [__dirname + '/**/*.resolver.{ts,js}'],
  });

  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log('Server has started!');
};

main();
