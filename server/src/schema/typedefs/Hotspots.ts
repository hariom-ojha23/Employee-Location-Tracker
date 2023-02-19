import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLFloat, GraphQLInputObjectType } from "graphql";
import { DateScalerType } from "../scalars/DateScalar";
import { OrganizationType } from "./Organizations";
import { GroupType, InputGroupType } from "./Groups";

export const LocationType = new GraphQLObjectType({
  name: "HotspotLocation",
  fields: () => ({
    latitude: {type: GraphQLFloat},
    longitude: {type: GraphQLFloat},
    address: {type: GraphQLString}
  })
})

export const InputLocationType = new GraphQLInputObjectType({
  name: "InputLocationType",
  fields: () => ({
    latitude: {type: GraphQLFloat},
    longitude: {type: GraphQLFloat},
    address: {type: GraphQLString}
  })
})

export const HotspotType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Hotspot',
  fields: () => ({
    id: {type: GraphQLString},
    hotspotname: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    groups: {type: GraphQLList(GroupType)},
    location: {type: GraphQLNonNull(LocationType)},
    created: {type: DateScalerType},
    updated: {type: DateScalerType},
  })
})

export const InputHotspotType: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'InputHotspot',
  fields: () => ({
    id: {type: GraphQLString},
    hotspotname: {type: GraphQLNonNull(GraphQLString)},
    organization: {type: GraphQLNonNull(GraphQLString)},
    groups: {type: GraphQLList(InputGroupType)},
    location: {type: GraphQLNonNull(InputLocationType)},
    created: {type: DateScalerType},
    updated: {type: DateScalerType},
  })
})