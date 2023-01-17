import { GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { DateScalerType } from "../scalars/DateScalar";
import { InputLocationType } from "../typedefs/Hotspots";
import { InputGroupType } from "../typedefs/Groups";
import { MessageType } from "../typedefs/Messages";
import { Hotspot } from "../../entities/Hotspots";

export const AddHotspot = {
  type: MessageType,
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
      const hotspot = new Hotspot()
      hotspot.organization = args.organization
      hotspot.hotspotname = args.hotspotname
      hotspot.location = args.location
      hotspot.groups = [...args.groups]
      hotspot.created = args.created
      hotspot.updated = args.updated

      await hotspot.save()
      return ({successful: true, message: 'Hotspot Added Successfully'})
      
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}