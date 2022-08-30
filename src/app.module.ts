import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CreatableResolver, UserResolver } from './resolvers';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './schema.graphql',
    }),
  ],
  providers: [CreatableResolver, UserResolver],
})
export class AppModule {}
