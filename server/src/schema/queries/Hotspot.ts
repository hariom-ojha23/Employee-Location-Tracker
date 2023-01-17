import { GraphQLList } from "graphql";
import { HotspotType } from "../typedefs/Hotspots";
import { Hotspot } from "../../entities/Hotspots";

export const GetAllHotspots = {
  type: new GraphQLList(HotspotType),
  resolve: () => {
    return Hotspot.find({
      relations: ['groups']
    })
  }
}