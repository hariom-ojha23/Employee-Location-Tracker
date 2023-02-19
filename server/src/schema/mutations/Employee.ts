import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { Employees } from "../../entities/Employees";
import { DateScalerType } from "../scalars/DateScalar";
import { InputGroupType } from "../typedefs/Groups";
import { EmployeeMessageType } from "../typedefs/Messages";

export const AddEmployee = {
  type: EmployeeMessageType,
  args: {
    fullname: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLNonNull(GraphQLString)},
    phonenumber: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    trackingstatus: {type: GraphQLNonNull(GraphQLString)},
    groups: {type: GraphQLList(InputGroupType), defaultValue: []},
    created: {type: DateScalerType, defaultValue: new Date()},
    updated: {type: DateScalerType, defaultValue: new Date()},
  },
  resolve: async (_:any, args: any) => {
    try {
      const employee = new Employees()
      employee.fullname = args.fullname
      employee.email = args.email
      employee.phonenumber = args.phonenumber
      employee.organization = args.organization
      employee.trackingstatus = args.trackingstatus
      employee.groups = [...args.groups]
      employee.created = args.created
      employee.updated = args.updated

      await employee.save()
      return ({successful: true, message: 'Employee added and tracking request sent successfully'})

    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}