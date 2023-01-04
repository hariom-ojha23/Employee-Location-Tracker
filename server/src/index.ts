import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import { connectDB } from "./config/db"

const main = async () => {
  const app = express()
  dotenv.config()
  
  app.use(cors())
  app.use(express.json())

  connectDB.initialize()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.log(error))

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}

main().catch((error) => console.log(error))