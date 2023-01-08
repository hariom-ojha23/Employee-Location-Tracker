import {GraphQLList} from 'graphql'
import { OrganizationType } from '../typedefs/Organizations'
import { organizations } from '../../entities/Organizations'

export const GetAllOrganizations = {
  type: new GraphQLList(OrganizationType),
  resolve: () => {
    return organizations.find()
  }
}