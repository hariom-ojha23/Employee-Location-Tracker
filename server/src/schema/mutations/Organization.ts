import {  GraphQLString, GraphQLNonNull } from "graphql";
import { organizations } from "../../entities/Organizations";
import { OrganizationType } from "../typedefs/Organizations";
import { DateScalerType } from "../scalars/DateScalar";

export const CreateOrganization = {
  type: OrganizationType,
  args: {
    id: {type: GraphQLNonNull(GraphQLString)},
    fullname: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLNonNull(GraphQLString)},
    password: {type: GraphQLNonNull(GraphQLString)},
    orgname: {type: GraphQLString, defaultValue: ""},
    orglogo: {type: GraphQLString, defaultValue: ""},
    created: {type: DateScalerType, defaultValue: new Date()},
    updated: {type: DateScalerType, defaultValue: new Date()},
  },
  resolve: async (_: any, args: any) => {
    await organizations.insert(args)
    return args
  }
}