import { Field, Int, InterfaceType, IntersectionType } from '@nestjs/graphql';

@InterfaceType()
export class Node {
  @Field()
  id: string;
}

@InterfaceType()
export class Creatable {
  @Field(() => Int)
  createdAt: number;
}

@InterfaceType({
  implements: [Node, Creatable],
})
export class User extends IntersectionType(Node, Creatable) {}
