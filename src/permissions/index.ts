import { allow, rule, shield } from "graphql-shield"
import { Context } from "../context"

const isAuthenticated = rule({ cache: "contextual" })(
  async (_root, _args, ctx: Context) => {
    return ctx.prisma.user !== null
  }
)

const permissions = shield({
  Query: {
    "*": isAuthenticated,
  },
  Mutation: {
    "*": isAuthenticated,
    login: allow,
    signup: allow,
    refreshAuth: allow,
    logout: allow,
  },
})

export default permissions
