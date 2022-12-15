import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import config from "./config.js"
import { routerApi } from "./router/api.router.js"
import { swaggerOptions } from "./swagger-options.js"
import expressJsDocSwagger from "express-jsdoc-swagger"

mongoose.set("strictQuery", true)
mongoose.connect(`mongodb://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}:${config.mongo.port}`)
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log("Could not connect to MongoDB", err))

const app = express()
app.use(express.json())

app.use(cors({
  "origin": '*',
  "methods": "GET, PUT, POST, DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200,
}))

expressJsDocSwagger(app)(swaggerOptions)

app.use('/api', routerApi)

app.listen(parseInt(config.server.port), () => {
  console.log("Server listening on port " + config.server.port)
})