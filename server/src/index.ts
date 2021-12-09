import fs from "fs"
import https from "https"
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const config=require("../config")
//import "reflect-metadata"
// import { login } from './middlewares/auth'

// Routes
import imagesRoutes from './routes/images.routes'

// App start
const app = express()

// Middlewares
// app.use(cors())
// app.use(morgan("dev"))
app.use(express.json())

//Routes
app.use("/api", imagesRoutes)

// Server Start
if (config.env=="D") {
    app.listen(config.port)
    console.log("Serving on port "+config.port)
} else {
    const httpsServerOptions={
        cert: fs.readFileSync("./certificados/_.kenwin.net.crt"),
        key: fs.readFileSync("./certificados/_.kenwin.net.key")
    }
    https.createServer(httpsServerOptions, app).listen(config.port)
    console.log("HTTPS Serving on port "+config.port)
}
