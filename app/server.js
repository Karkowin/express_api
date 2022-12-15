import express from "express"
import mongoose from "mongoose"
import config from "./config.js"

mongoose.set("strictQuery", true)
mongoose.connect(`mongodb://${config.mongo.user}:${config.mongo.password}@${config.mongo.host}:${config.mongo.port}`)
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log("Could not connect to MongoDB", err))

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(parseInt(config.server.port), () => {
  console.log("Server listening on port " + config.server.port)
})