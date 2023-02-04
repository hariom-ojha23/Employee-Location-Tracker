import { GraphQLBoolean, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { DateScalerType } from "../scalars/DateScalar";
import { GroupType, InputGroupType } from "./Groups";

export const EmployeeType: GraphQLObjectType = new GraphQLObjectType({
  name: "Employee",
  fields: () => ({
    id: {type: GraphQLString},
    fullname: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLNonNull(GraphQLString)},
    phonenumber: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    trackingstatus: {type: GraphQLNonNull(GraphQLString)},
    groups: {type: GraphQLList(GroupType)},
    created: {type: DateScalerType},
    updated: {type: DateScalerType},
  })
})

export const InputEmployeeType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: "InputEmployee",
  fields: () => ({
    id: {type: GraphQLString},
    fullname: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLNonNull(GraphQLString)},
    phonenumber: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    trackingstatus: {type: GraphQLNonNull(GraphQLString)},
    groups: {type: GraphQLList(InputGroupType)},
    created: {type: DateScalerType},
    updated: {type: DateScalerType},
  })
})