import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } from "graphql";
import { organizations } from "../../entities/Organizations";
import { OrganizationType } from "../typedefs/Organizations";

export const CreateOrganization = {
  type: OrganizationType,
  args: {
    id: {type: GraphQLNonNull(GraphQLID)},
    fullname: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLNonNull(GraphQLString)},
    password: {type: GraphQLNonNull(GraphQLString)},
    orgname: {type: GraphQLString, defaultValue: ""},
    orglogo: {type: GraphQLString, defaultValue: ""},
    created: {type: GraphQLNonNull(GraphQLString)},
    updated: {type: GraphQLNonNull(GraphQLString)},
  },
  resolve: (_: any, args: any) => {
    args.created = new Date()
    args.updated = new Date()
    organizations.insert(args)
    return args
  }
}