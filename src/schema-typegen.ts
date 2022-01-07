/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context as Context } from "./context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BoardWhereUniqueInput: { // input type
    id: string; // ID!
  }
  CreateBoardInput: { // input type
    description: string; // String!
    name: string; // String!
  }
  CreateBoardItemInput: { // input type
    content: string; // String!
  }
  UserWhereUniqueInput: { // input type
    id: string; // ID!
  }
  VoteItemWhereUniqueInput: { // input type
    itemId: string; // String!
    userId: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Board: { // root type
    description: string; // String!
    id: string; // ID!
    name: string; // String!
  }
  Item: { // root type
    content: string; // String!
    id: string; // ID!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
    password: string; // String!
  }
  Vote: { // root type
    itemId: string; // ID!
    userId: string; // ID!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Board: { // field return type
    description: string; // String!
    id: string; // ID!
    items: NexusGenRootTypes['Item'][]; // [Item!]!
    name: string; // String!
  }
  Item: { // field return type
    content: string; // String!
    id: string; // ID!
    votes: NexusGenRootTypes['Vote'][]; // [Vote!]!
  }
  Mutation: { // field return type
    createBoard: NexusGenRootTypes['Board'] | null; // Board
    createBoardItem: NexusGenRootTypes['Item'] | null; // Item
    removeBoardItem: NexusGenRootTypes['Item'] | null; // Item
    voteItem: NexusGenRootTypes['Vote'] | null; // Vote
  }
  Query: { // field return type
    board: NexusGenRootTypes['Board'] | null; // Board
    boards: NexusGenRootTypes['Board'][] | null; // [Board!]
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][] | null; // [User!]
  }
  User: { // field return type
    email: string; // String!
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
    password: string; // String!
    votes: NexusGenRootTypes['Vote'][]; // [Vote!]!
  }
  Vote: { // field return type
    item: NexusGenRootTypes['Item']; // Item!
    itemId: string; // ID!
    user: NexusGenRootTypes['User']; // User!
    userId: string; // ID!
  }
}

export interface NexusGenFieldTypeNames {
  Board: { // field return type name
    description: 'String'
    id: 'ID'
    items: 'Item'
    name: 'String'
  }
  Item: { // field return type name
    content: 'String'
    id: 'ID'
    votes: 'Vote'
  }
  Mutation: { // field return type name
    createBoard: 'Board'
    createBoardItem: 'Item'
    removeBoardItem: 'Item'
    voteItem: 'Vote'
  }
  Query: { // field return type name
    board: 'Board'
    boards: 'Board'
    user: 'User'
    users: 'User'
  }
  User: { // field return type name
    email: 'String'
    firstName: 'String'
    id: 'ID'
    lastName: 'String'
    password: 'String'
    votes: 'Vote'
  }
  Vote: { // field return type name
    item: 'Item'
    itemId: 'ID'
    user: 'User'
    userId: 'ID'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createBoard: { // args
      input: NexusGenInputs['CreateBoardInput']; // CreateBoardInput!
    }
    createBoardItem: { // args
      input: NexusGenInputs['CreateBoardItemInput']; // CreateBoardItemInput!
      where: NexusGenInputs['BoardWhereUniqueInput']; // BoardWhereUniqueInput!
    }
    removeBoardItem: { // args
      where: NexusGenInputs['BoardWhereUniqueInput']; // BoardWhereUniqueInput!
    }
    voteItem: { // args
      where: NexusGenInputs['VoteItemWhereUniqueInput']; // VoteItemWhereUniqueInput!
    }
  }
  Query: {
    board: { // args
      where: NexusGenInputs['BoardWhereUniqueInput']; // BoardWhereUniqueInput!
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}