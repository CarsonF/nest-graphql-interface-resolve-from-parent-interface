Bug points:
- Field resolver providing a field for an interface: `Creatable.updatedAt`
- An interface extending above via IntersectionType: `User`
- `Node` is only used to have another arg for `IntersectionType` but is otherwise insignificant

> GraphQLError: Interface field Creatable.updatedAt expected but User does not provide it.

The `IntersectionType` usage is significant; if `Node` is dropped and `User extends Createable` everything is fine.
