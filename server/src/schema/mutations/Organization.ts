import {  GraphQLString, GraphQLNonNull } from "graphql";
import { organizations } from "../../entities/Organizations";
import { DateScalerType } from "../scalars/DateScalar";
import { OrgAuthType } from "../typedefs/Authentication";
import {v4 as uuid} from 'uuid'
import bcrypt from 'bcryptjs'
import { getAccessToken, getRefreshToken, matchPassword } from "../../utils/auth";

export const RegisterOrganization = {
  type: OrgAuthType,
  args: {
    id: {type: GraphQLString, defaultValue: ""},
    fullname: {type: GraphQLNonNull(GraphQLString)},
    email: {type: GraphQLNonNull(GraphQLString)},
    password: {type: GraphQLNonNull(GraphQLString)},
    orgname: {type: GraphQLString, defaultValue: ''},
    orglogo: {type: GraphQLString, defaultValue: ''},
    created: {type: DateScalerType, defaultValue: new Date()},
    updated: {type: DateScalerType, defaultValue: new Date()},
  },
  resolve: async (_: any, args: any) => {
    try {
      const encryptedPassword = await bcrypt.hash(args.password, 10)
      args.password = encryptedPassword
      args.id = uuid()

      await organizations.insert(args)
      const user = await organizations.findOneBy({email: args.email})
      const accessToken = await getAccessToken(user!.id)
      const refreshToken = await getRefreshToken(user!.id)

      return {userInfo: user, accessToken: accessToken, refreshToken: refreshToken}
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export const LoginOrganization = {
  type: OrgAuthType,
  args: {
    email: {type: GraphQLNonNull(GraphQLString)},
    password: {type: GraphQLNonNull(GraphQLString)},
  },
  resolve: async (_: any, args: any) => {
    try {
      const user = await organizations.findOneBy({email: args.email})
      if (!user) return new Error("User with this email address do not exist")
      const passwordMatch = await matchPassword(args.password, user.password)
      if (!passwordMatch) return new Error('Incorrect password')

      const accessToken = await getAccessToken(user!.id)
      const refreshToken = await getRefreshToken(user!.id)
      
      return {userInfo: user, accessToken: accessToken, refreshToken: refreshToken}
    } catch (error: any) {
      throw new Error(error)
    }
  }
}