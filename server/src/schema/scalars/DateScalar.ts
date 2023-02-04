import {GraphQLScalarType} from 'graphql'
import {Kind} from 'graphql/language'

export const DateScalerType = new GraphQLScalarType({
  name: 'Date',
  parseValue: (value) => {
    return new Date(value)
  },
  serialize: (value) => {
    return new Date(value)
  },
  parseLiteral: (ast) => {
    if (ast.kind === Kind.INT) {
      return new Date(+ast.value)
    } else if (ast.kind === Kind.STRING) {
      return new Date(ast.value)
    }
    return null
  }
})