import { mutationField, nullable } from "nexus";
import { Board, Item } from "../models";

export const createBoard = mutationField("createBoard", {
  type: nullable(Board),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const createBoardItem = mutationField("createBoardItem", {
  type: nullable(Item),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const removeBoardItem = mutationField("removeBoardItem", {
  type: nullable(Item),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const voteItem = mutationField("voteItem", {
  type: nullable(Item),
  resolve: async (root, args, ctx) => {
    return null;
  },
});
