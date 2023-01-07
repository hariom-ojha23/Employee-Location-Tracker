import {gql} from '@apollo/client'

export const CREATE_ORG = gql`
  mutation createOrganization(
    $id: String!,
    $fullname: String!,
    $email: String!,
    $password: String!,
    $orgname: String,
    $orglogo: String,
    $created: Date,
    $updated: Date,
  ) {
    createOrganization(
      id: $id,
      fullname: $fullname,
      email: $email,
      password: $password,
      orgname: $orgname,
      orglogo: $orglogo,
      created: $created,
      updated: $updated,
    ) {
      id
      fullname
      email
    }
  }
`