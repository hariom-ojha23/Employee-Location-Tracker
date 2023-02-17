import {gql} from '@apollo/client'

export const ADD_GROUP = gql`
  mutation addGroup($groupname: String!, $organization: String!, $schedule: InputScheduleType!,) {
    addGroup(groupname: $groupname, organization: $organization, schedule: $schedule) {
      successful
      message
      res {
        id
        groupname
        organization
        schedule {
          starttime
          endtime
        }
        created
        updated
      }
    }
  }
`

export const GET_ALL_GROUPS = gql`
  query getAllGroups($organization: String!) {
    getAllGroups(organization: $organization) {
      id
      groupname
      organization
      schedule {
        starttime
        endtime
      }
      hotspots {
        hotspotname
      }
      admins {
        fullname
      }
    }
  }
`