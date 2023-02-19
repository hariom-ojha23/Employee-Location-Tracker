import { gql } from "@apollo/client";

export const ADD_HOTSPOT = gql`
  mutation addHotspot($hotspotname: String!, $organization: String!, $location: InputLocationType!, $groups: [InputGroupType]) {
    addHotspot(hotspotname: $hotspotname, organization: $organization, location: $location, groups: $groups) {
      successful
      message
      res {
        id
        hotspotname
        organization
        location {
          latitude
          longitude
          address
        }
        created
        updated
        groups {
          id
          groupname
        }
      }
    }
  }
`

export const GET_ALL_HOTSPOTS = gql`
  query getAllHotspots($organization: String!) {
    getAllHotspots(organization: $organization) {
      id
      hotspotname
      organization
      location {
        latitude
        longitude
        address
      }
      groups {
        id
        groupname
        schedule {
          starttime
          endtime
        }
      }
      created
      updated
    }
  }
`