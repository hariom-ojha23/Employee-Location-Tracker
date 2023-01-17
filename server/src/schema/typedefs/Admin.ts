import { GraphQLBoolean, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { DateScalerType } from "../scalars/DateScalar";
import { GroupType, InputGroupType } from "./Groups";

export const AdminType: GraphQLObjectType = new GraphQLObjectType({
  name: "Admin",
  fields: () => ({
    id: {type: GraphQLString},
    fullname: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLNonNull(GraphQLString)},
    password: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    groups: {type: GraphQLList(GroupType)},
    verified: {type: GraphQLNonNull(GraphQLBoolean)},
    created: {type: DateScalerType},
    updated: {type: DateScalerType},
  })
})

export const InputAdminType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: "InputAdmin",
  fields: () => ({
    id: {type: GraphQLString},
    fullname: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLNonNull(GraphQLString)},
    password: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    groups: {type: GraphQLList(InputGroupType)},
    verified: {type: GraphQLNonNull(GraphQLBoolean)},
    created: {type: DateScalerType},
    updated: {type: DateScalerType},
  })
})