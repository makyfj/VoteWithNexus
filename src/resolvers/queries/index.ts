import {nonNull, queryField, list, nullable} from "nexus"
import {Board} from ".."

export const boards = queryField("boards", {
    type: nullable(list(nonNull(Board))),
    resolve: async (root, args, ctx) => {
        return []
    }
})

export const board = queryField("board", {
    type: nullable(Board),
    resolve: async (root, args, ctx) => {
        return null
    }
})