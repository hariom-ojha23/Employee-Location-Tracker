import { GraphQLList, GraphQLString } from "graphql";
import { GroupType } from "../typedefs/Groups";
import { Groups } from "../../entities/Groups";

export const GetAllGroups = {
  type: new GraphQLList(GroupType),
  args: {
    organization: {type: GraphQLString}
  },
  resolve: async (_: any, args: any) => {
    try {
      const organization = args?.organization
      if (!organization) return []

      const groups = await Groups.find({
        where: {organization: organization},
        relations: ['hotspots', 'admins', 'employees'],
        order: { created: "DESC"}
      })

      return groups
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export const GetGroupDetails = {
  type: GroupType,
  args: {
    id: {type: GraphQLString}
  },
  resolve: async (_: any, args: any) => {
    try {
      const id = args?.id
      if (!id) return null;

      const group = await Groups.findOne({
        where: {id: id},
        relations: ['hotspots', 'admins', 'employees']
      })

      return group
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}