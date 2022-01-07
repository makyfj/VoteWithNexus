import { nonNull, queryField, list, nullable } from "nexus";
import { Board, User } from "..";
import { BoardWhereUniqueInput, UserWhereUniqueInput } from "../inputs";

export const users = queryField("users", {
  type: nullable(list(nonNull(User))),
  resolve: async (rott, args, ctx) => {
    return ctx.prisma.user.findMany({});
  },
});

export const user = queryField("user", {
  type: nullable(User),
  args: {
    where: nonNull(UserWhereUniqueInput),
  },
  resolve: async (root, args, ctx) => {
    return ctx.prisma.user.findUnique({
      where: {
        id: args.where.id,
      },
    });
  },
});

export const boards = queryField("boards", {
  type: nullable(list(nonNull(Board))),
  resolve: async (root, args, ctx) => {
    return ctx.prisma.board.findMany({});
  },
});

export const board = queryField("board", {
  type: nullable(Board),
  args: {
    where: nonNull(BoardWhereUniqueInput),
  },
  resolve: async (root, args, ctx) => {
    return ctx.prisma.board.findUnique({
      where: {
        id: args.where.id,
      },
    });
  },
});
