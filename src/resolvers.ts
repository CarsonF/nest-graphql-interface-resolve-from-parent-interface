import { Int, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Creatable, User } from './entities';

@Resolver(() => Creatable)
export class CreatableResolver {
  @ResolveField(() => Int)
  updatedAt() {
    return Date.now();
  }
}

// Only here to have a query defined
@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  user() {
    return null;
  }
}
