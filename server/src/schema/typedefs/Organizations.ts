import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { DateScalerType } from "../scalars/DateScalar";

export const OrganizationType = new GraphQLObjectType({
  name: 'Organization',
  fields: () => ({
    id: {type: GraphQLNonNull(GraphQLString)},
    fullname: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLNonNull(GraphQLString)},
    password: {type: GraphQLNonNull(GraphQLString)},
    orgname: {type: GraphQLString},
    orglogo: {type: GraphQLString},
    created: {type: DateScalerType},
    updated: {type: DateScalerType},
  })
})