import { GraphQLList, GraphQLString } from "graphql";
import { Employees } from "../../entities/Employees";
import { EmployeeType } from "../typedefs/Employee";


export const GetAllEmployees = {
  type: new GraphQLList(EmployeeType),
  args: {
    organization: {type: GraphQLString}
  },
  resolve: async (_:any, args: any) => {
    try {
      const organization = args?.organization
      if (!organization) return [];

      const employees = await Employees.find({
        where: {organization: organization},
        relations: ['groups'],
        order: {created: "DESC"}
      })

      return employees
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export const GetEmployeeDetails = {
  type: EmployeeType,
  args: {
    id: {type: GraphQLString}
  },
  resolve: async (_: any, args: any) => {
    try {
      const id = args?.id
      if (!id) return null;

      const employee = await Employees.findOne({
        where: {id: id},
        relations: ['groups']
      })

      return employee
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}