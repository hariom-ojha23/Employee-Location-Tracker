import { GraphQLList, GraphQLString } from "graphql";
import { HotspotType } from "../typedefs/Hotspots";
import { Hotspots } from "../../entities/Hotspots";

export const GetAllHotspots = {
  type: new GraphQLList(HotspotType),
  args: {
    organization: {type: GraphQLString}
  },
  resolve: async (_: any, args: any) => {
    try {
      const organization = args?.organization
      if (!organization) return [];

      const hotspots = await Hotspots.find({
        where: {organization: organization},
        relations: ['groups'],
        order: { created: "DESC"}
      })

      return hotspots
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export const getHotspotDetails = {
  type: HotspotType,
  args: {
    id: {type: GraphQLString}
  },
  resolve: async (_: any, args: any) => {
    try {
      const id = args?.id
      if (!id) return null;

      const hotspot = await Hotspots.findOne({
        where: {id: id},
        relations: ['groups']
      })

      return hotspot
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}