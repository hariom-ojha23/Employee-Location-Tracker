import { rule } from "graphql-shield";
import { organizations } from "../entities/Organizations";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

export const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return true
})

export const isNotAlreadyRegistered = rule()(async (parent, args, ctx, info) => {
  const email = args.email
  const user = await organizations.findOneBy({email: email})

  if (user) return new Error("A user with this email already exist")
  return true
})

export const getAccessToken = async (id: string) => {
  const secret: string = process.env.ACCESS_TOKEN_SECRET ? process.env.ACCESS_TOKEN_SECRET : "1234567890"
  return jwt.sign({id: id}, secret, {expiresIn: '15m'})
}

export const getRefreshToken = async (id: string) => {
  const secret: string = process.env.REFRESH_TOKEN_SECRET ? process.env.REFRESH_TOKEN_SECRET : "0987654321"
  return jwt.sign({id: id}, secret, {expiresIn: '7d'})
}

export const matchPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash)
}