import { inputObjectType } from "nexus"

export const UserWhereUniqueInput = inputObjectType({
  name: "UserWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id")
  },
})

export const BoardWhereUniqueInput = inputObjectType({
  name: "BoardWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id")
  },
})

export const ItemWhereUniqueInput = inputObjectType({
  name: "ItemWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id")
  },
})

export const CreateBoardInput = inputObjectType({
  name: "CreateBoardInput",
  definition(t) {
    t.nonNull.string("name")
    t.nonNull.string("description")
  },
})

export const CreateBoardItemInput = inputObjectType({
  name: "CreateBoardItemInput",
  definition(t) {
    t.nonNull.string("content")
  },
})

export const VoteItemWhereUniqueInput = inputObjectType({
  name: "VoteItemWhereUniqueInput",
  definition(t) {
    t.nonNull.string("itemId"), t.nonNull.string("userId")
  },
})

export const SignupInput = inputObjectType({
  name: "SignupInput",
  definition(t) {
    t.nonNull.string("firstName")
    t.nonNull.string("lastName")
    t.nonNull.string("email")
    t.nonNull.string("password")
  },
})

export const LoginInput = inputObjectType({
  name: "LoginInput",
  definition(t) {
    t.nonNull.string("email")
    t.nonNull.string("password")
  },
})
