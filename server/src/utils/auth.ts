import { rule } from "graphql-shield";
import { Organizations } from "../entities/Organizations";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  let token = ctx.headers?.authorization
  if (!token || !token.startsWith('Bearer')) return new Error('You are not authorised')
  token = token.split(" ")[1]
  const isAccessValid = await verifyAccessToken(token)
  return isAccessValid
})

export const isNotAlreadyRegistered = rule()(async (parent, args, ctx, info) => {
  const email = args.email
  const user = await Organizations.findOneBy({email: email})

  if (user) return new Error("A user with this email already exist")
  return true
})

export async function getAccessToken(id: string) {
  const secret: string = process.env.ACCESS_TOKEN_SECRET ? process.env.ACCESS_TOKEN_SECRET : "1234567890"
  return jwt.sign({id: id}, secret, {expiresIn: '60m'})
}

export async function getRefreshToken(id: string) {
  const secret: string = process.env.REFRESH_TOKEN_SECRET ? process.env.REFRESH_TOKEN_SECRET : "0987654321"
  return jwt.sign({id: id}, secret, {expiresIn: '7d'})
}

export async function matchPassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash)
}

interface JwtPayload {
  id: string
  iat: number,
  exp: number
}

async function verifyAccessToken(token: string) {
  try {
    const access_secret: string = process.env.ACCESS_TOKEN_SECRET ? process.env.ACCESS_TOKEN_SECRET : "1234567890"
    const decode = jwt.verify(token, access_secret) as JwtPayload
    const id: string = decode.id
    const org = Organizations.findOneBy({id: id})
    if (!org) throw new Error('You are not authorised')

    return true
  } catch (error: any) {
    throw new Error('You are not authorised')
  }
}

async function verifyRefreshToken(token: string) {
  const refresh_secret: string = process.env.REFRESH_TOKEN_SECRET ? process.env.REFRESH_TOKEN_SECRET : "1234567890"
  return jwt.verify(token, refresh_secret) as JwtPayload
}

async function reIssueTokens(refrestToken: string) {
  const payload: JwtPayload = await verifyRefreshToken(refrestToken);
  const id = payload.id
}