import {gql} from '@apollo/client'

export const ADD_GROUP = gql`
  mutation addGroup($groupname: String!, $organization: String!, $schedule: {$starttime: Date!, $endtime: Date!}) {
    addGroup(groupname: $groupname, organization: $organization, schedule: $schedule) {
      successfull
      message
      data {
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