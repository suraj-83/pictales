import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import { MONGO_DB_URL, PORT } from './config.js'
import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({ limit: "20mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(MONGO_DB_URL, clientOptions)
.then(() => app.listen(PORT, () => {
    console.log("Connected to MongoDB Cluster")
    console.log(`Server running on PORT: ${PORT}`)
}))
.catch(err => console.log(err.message))