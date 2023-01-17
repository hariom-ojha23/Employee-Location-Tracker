import {GraphQLList} from 'graphql'
import { OrganizationType } from '../typedefs/Organizations'
import { Organizations } from '../../entities/Organizations'

export const GetAllOrganizations = {
  type: new GraphQLList(OrganizationType),
  resolve: () => {
    return Organizations.find()
  }
}