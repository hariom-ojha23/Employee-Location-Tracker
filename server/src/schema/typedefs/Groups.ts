import { GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { DateScalerType } from "../scalars/DateScalar";
import { HotspotType, InputHotspotType } from "./Hotspots";
import { AdminType, InputAdminType } from "./Admin";
import { EmployeeType, InputEmployeeType } from "./Employee";

export const ScheduleType = new GraphQLObjectType({
  name: "ScheduleType",
  fields: () => ({
    starttime: {type: DateScalerType},
    endtime: {type: DateScalerType},
  })
})

export const InputScheduleType = new GraphQLInputObjectType({
  name: "InputScheduleType",
  fields: () => ({
    starttime: {type: DateScalerType},
    endtime: {type: DateScalerType},
  })
})


export const GroupType: GraphQLObjectType = new GraphQLObjectType({
  name: "Group",
  fields: () => ({
    id: {type: GraphQLString},
    groupname: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    hotspots: {type: GraphQLList(HotspotType)},
    employees: {type: GraphQLList(EmployeeType)},
    admins: {type: GraphQLList(AdminType)},
    schedule: {type: GraphQLNonNull(ScheduleType)},
    created: {type: DateScalerType},
    updated: {type: DateScalerType},
  })
})

export const InputGroupType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: "InputGroupType",
  fields: () => ({
    id: {type: GraphQLString},
    groupname: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    hotspots: {type: GraphQLList(InputHotspotType)},
    employees: {type: GraphQLList(InputEmployeeType)},
    admins: {type: GraphQLList(InputAdminType)},
    schedule: {type: GraphQLNonNull(InputScheduleType)},
  })
})