import { DataSource } from "typeorm";
import dotenv from 'dotenv'

import { Organizations } from "../entities/Organizations"
import { Hotspots } from "../entities/Hotspots";
import { Groups } from "../entities/Groups";
import { Employees } from "../entities/Employees";
import { Admins } from "../entities/Admins";

dotenv.config()

const DB_PASSWORD = process.env.DB_PASSWORD

export const connectDB = new DataSource({
  type: 'mysql',
  database: 'gpsreport',
  username: 'root',
  password: DB_PASSWORD,
  logging: true,
  synchronize: false,
  port: 3306,
  entities: [Organizations, Hotspots, Groups, Employees, Admins]
})