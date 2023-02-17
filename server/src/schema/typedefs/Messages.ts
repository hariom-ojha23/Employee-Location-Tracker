import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";
import { HotspotType } from "./Hotspots";
import { GroupType } from "./Groups";
import { EmployeeType } from "./Employee";
import { AdminType } from "./Admin";

export const HotspotMessageType = new GraphQLObjectType({
  name: 'HotspotMessage',
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
    res: {type: HotspotType || null}
  })
})

export const GroupMessageType = new GraphQLObjectType({
  name: 'GroupMessage',
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
    res: {type:  GroupType || null}
  })
})

export const EmployeeMessageType = new GraphQLObjectType({
  name: 'EmployeeMessage',
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
    res: {type: EmployeeType || null}
  })
})

export const AdminMessageType = new GraphQLObjectType({
  name: 'AdminMessage',
  fields: () => ({
    successful: {type: GraphQLBoolean},
    message: {type: GraphQLString},
    res: {type: AdminType || null}
  })
})