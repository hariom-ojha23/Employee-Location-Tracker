import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { MessageType } from "../typedefs/Messages";
import { InputHotspotType } from "../typedefs/Hotspots";
import { InputEmployeeType } from "../typedefs/Employee";
import { InputAdminType } from "../typedefs/Admin";
import { InputScheduleType } from "../typedefs/Groups";
import { DateScalerType } from "../scalars/DateScalar";
import { Group } from "../../entities/Groups";


export const AddGroup = {
  type: MessageType,
  args: {
    groupname: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    hotspots: {type: GraphQLList(InputHotspotType)},
    employees: {type: GraphQLList(InputEmployeeType)},
    admins: {type: GraphQLList(InputAdminType)},
    schedule: {type: GraphQLNonNull(InputScheduleType)},
    created: {type: DateScalerType, defaultValue: new Date()},
    updated: {type: DateScalerType, defaultValue: new Date()},
  },
  resolve: async (_: any, args: any) => {
    try {
      await Group.insert(args)
      return ({successful: true, message: 'Group Added Successfully'})
      
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}