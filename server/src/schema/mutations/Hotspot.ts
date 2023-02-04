import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { DateScalerType } from "../scalars/DateScalar";
import { InputLocationType } from "../typedefs/Hotspots";
import { InputGroupType } from "../typedefs/Groups";
import { HotspotMessageType } from "../typedefs/Messages";
import { Hotspots } from "../../entities/Hotspots";

export const AddHotspot = {
  type: HotspotMessageType,
  args: {
    hotspotname: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    groups: {type: GraphQLList(InputGroupType), defaultValue: []},
    location: {type: GraphQLNonNull(InputLocationType)},
    created: {type: DateScalerType, defaultValue: new Date()},
    updated: {type: DateScalerType, defaultValue: new Date()},
  },
  resolve: async (_: any, args: any) => {
    try {
      const hotspot = new Hotspots()
      hotspot.organization = args.organization
      hotspot.hotspotname = args.hotspotname
      hotspot.location = args.location
      hotspot.groups = [...args.groups]
      hotspot.created = args.created
      hotspot.updated = args.updated

      await hotspot.save()
      return ({successful: true, message: 'Hotspot Added Successfully', data: hotspot})
      
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}