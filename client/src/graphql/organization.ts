import {gql} from '@apollo/client'

export const REGISTER_ORG = gql`
  mutation registerOrganization($fullname: String!, $email: String!, $password: String!,) {
    registerOrganization( fullname: $fullname, email: $email, password: $password,) {
      userInfo {
        id
        fullname
        email
        orgname
        orglogo
      }
      accessToken
      refreshToken
    }
  }
`

export const LOGIN_ORG = gql`
  mutation loginOrganization($email: String!, $password: String!,) {
    loginOrganization( email: $email, password: $password,) {
      userInfo {
        id
        fullname
        email
        orgname
        orglogo
      }
      accessToken
      refreshToken
    }
  }
`