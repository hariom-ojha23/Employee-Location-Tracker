import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { GroupMessageType } from "../typedefs/Messages";
import { InputHotspotType } from "../typedefs/Hotspots";
import { InputEmployeeType } from "../typedefs/Employee";
import { InputAdminType } from "../typedefs/Admin";
import { InputScheduleType } from "../typedefs/Groups";
import { DateScalerType } from "../scalars/DateScalar";
import { Groups } from "../../entities/Groups";


export const AddGroup = {
  type: GroupMessageType,
  args: {
    groupname: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    hotspots: {type: GraphQLList(InputHotspotType), defaultValue: []},
    employees: {type: GraphQLList(InputEmployeeType), defaultValue: []},
    admins: {type: GraphQLList(InputAdminType), defaultValue: []},
    schedule: {type: GraphQLNonNull(InputScheduleType)},
    created: {type: DateScalerType, defaultValue: new Date()},
    updated: {type: DateScalerType, defaultValue: new Date()},
  },
  resolve: async (_: any, args: any) => {
    try {
      const group = new Groups()
      group.groupname = args.groupname
      group.organization = args.organization
      group.admins = [...args.admins]
      group.hotspots = [...args.hotspots]
      group.employees = [...args.employees]
      group.schedule = args.schedule
      group.created = args.created
      group.updated = args.updated

      await group.save()
      return ({successful: true, message: 'Group Added Successfully', data: group})
      
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}