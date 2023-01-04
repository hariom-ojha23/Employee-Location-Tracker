import {GraphQLScalarType} from 'graphql'
import {Kind} from 'graphql/language'

export const DateScalerType = new GraphQLScalarType({
  name: 'Date',
  parseValue: (value) => new Date(value),
  serialize: (value) => value.getTime(),
  parseLiteral: (ast) => {
    if (ast.kind === Kind.INT) {
      return new Date(+ast.value)
    }
    return null
  }
})