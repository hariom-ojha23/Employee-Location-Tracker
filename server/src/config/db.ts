import { DataSource } from "typeorm";
import dotenv from 'dotenv'

dotenv.config()

const DB_PASSWORD = process.env.DB_PASSWORD

export const connectDB = new DataSource({
  type: 'mysql',
  database: 'gpsreport',
  username: 'root',
  password: DB_PASSWORD,
  logging: true,
  synchronize: false,
  entities: []
})