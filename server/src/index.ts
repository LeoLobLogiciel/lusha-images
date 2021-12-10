import fs from 'fs'
import https from 'https'
import express from 'express'

const config=require("../config")

// Import routes
import imagesRoutes from './routes/images.routes'

// App start
const app = express()

// Middlewares
app.use(express.json())

// Using routes
app.use('/api', imagesRoutes)

// Server Start
app.listen(config.port)
console.log('Serving on port '+config.port)
