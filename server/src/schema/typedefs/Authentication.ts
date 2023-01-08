import { GraphQLObjectType, GraphQLString } from "graphql";
import { OrganizationType } from "./Organizations";

export const OrgAuthType = new GraphQLObjectType({
  name: "OrgAuthentication",
  fields: () => ({
    userInfo: {type: OrganizationType},
    accessToken: {type: GraphQLString},
    refreshToken: {type: GraphQLString},
  })
})


// export const AuthenticationType = new GraphQLObjectType({
//   name: "Authentication",
//   fields: () => ({
//     userInfo: OrganizationType
//   })
// })