import { DataSource } from "typeorm";
import dotenv from 'dotenv'

import { Organizations } from "../entities/Organizations"
import { Hotspot } from "../entities/Hotspots";
import { Group } from "../entities/Groups";
import { Employee } from "../entities/Employees";
import { Admin } from "../entities/Admins";

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
  entities: [Organizations, Hotspot, Group, Employee, Admin]
})