import { GraphQLObjectType, GraphQLSchema } from "graphql/type";
import { RegisterOrganization, LoginOrganization } from "./mutations/Organization";
import { GetAllOrganizations } from "./queries/Organization";
import {applyMiddleware} from "graphql-middleware"
import {shield} from 'graphql-shield'
import { isAuthenticated, isNotAlreadyRegistered } from "../utils/auth";
import { GetAllHotspots, getHotspotDetails } from "./queries/Hotspot";
import { AddHotspot } from "./mutations/Hotspot";
import { AddGroup } from "./mutations/Group";
import { GetAllGroups } from "./queries/Group";

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    getAllOrganizations: GetAllOrganizations,
    getAllHotspots: GetAllHotspots,
    getHotspotDetails: getHotspotDetails,
    getAllGroups: GetAllGroups,
  }),
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => ({
    registerOrganization: RegisterOrganization,
    loginOrganization: LoginOrganization,
    addHotspot: AddHotspot,
    addGroup: AddGroup,
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
