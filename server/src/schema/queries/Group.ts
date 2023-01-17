import { GraphQLList } from "graphql";
import { GroupType } from "../typedefs/Groups";
import { Group } from "../../entities/Groups";

export const GetAllGroups = {
  type: new GraphQLList(GroupType),
  resolve: () => {
    return Group.find({
      relations: ['hotspots']
    })
  }
}