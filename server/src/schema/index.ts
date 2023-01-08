import { GraphQLObjectType, GraphQLSchema } from "graphql/type";
import { RegisterOrganization, LoginOrganization } from "./mutations/Organization";
import { GetAllOrganizations } from "./queries/Organization";
import {applyMiddleware} from "graphql-middleware"
import {shield, not} from 'graphql-shield'
import { isAuthenticated, isNotAlreadyRegistered } from "../utils/auth";

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    getAllOrganizations: GetAllOrganizations
  }),
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => ({
    registerOrganization: RegisterOrganization,
    loginOrganization: LoginOrganization
  })
})

const permissions = shield({
  RootQuery: {
    getAllOrganizations: isAuthenticated
  },
  RootMutation: {
    registerOrganization: isNotAlreadyRegistered
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})

export const schemaWithPermissions = applyMiddleware(schema, permissions)
