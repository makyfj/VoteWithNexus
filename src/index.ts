import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"
import express from "express"
import http from "http"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import { schema } from "./schema"
import { createContext } from "./context"

// For middleware
const IS_DEV = process.env.NODE_ENV === "development"
const localOrigins = [/^http:\/\/localhost:\d{4}$/]
const prodOrigins = [/^https:\/\/.*\.yourdomain\.com$/]

async function startApolloServer() {
  // Run env files
  dotenv.config()
  const app = express()

  const corsOptions = {
    origin: "https://studio.apollographql.com",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  }

  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    schema: schema,
    context: createContext,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })

  await server.start()

  app.use(cookieParser())

  server.applyMiddleware({
    app,
    cors: corsOptions,
  })
  await new Promise<void>((resolve) => {
    httpServer.listen({ port: 4000 })
    resolve()
  })

  console.log(`Server is running at http://localhost:4000${server.graphqlPath}`)
}

startApolloServer()
