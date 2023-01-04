import {GraphQLList} from 'graphql'
import { OrganizationType } from '../typedefs/Organizations'
import { organizations } from '../../entities/Organizations'

export const GetAllOrgaizations = {
  type: new GraphQLList(OrganizationType),
  resolve: () => {
    return organizations.find()
  }
}