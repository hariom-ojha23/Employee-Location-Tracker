import express from "express"
import cors from "cors"
import { graphqlHTTP } from "express-graphql"
import dotenv from 'dotenv'
import { connectDB } from "./config/db"
import { schemaWithPermissions } from "./schema"

const main = async () => {
  const app = express()
  dotenv.config()
  
  app.use(cors())
  app.use(express.json())

  connectDB.initialize()
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.log(error))

  app.use('/graphql', graphqlHTTP({
    schema: schemaWithPermissions,
    graphiql: true
  }))

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}

main().catch((error) => console.log(error))