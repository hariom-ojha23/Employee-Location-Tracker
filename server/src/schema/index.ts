import { GraphQLObjectType, GraphQLSchema } from "graphql/type";
import { CreateOrganization } from "./mutations/Organization";
import { GetAllOrgaizations } from "./queries/Organization";

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    getAllOrgaizations: GetAllOrgaizations
  }),
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => ({
    createOrganization: CreateOrganization
  })
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})