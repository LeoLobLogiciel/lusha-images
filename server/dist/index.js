"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var https_1 = __importDefault(require("https"));
var express_1 = __importDefault(require("express"));
var config = require("../config");
//import "reflect-metadata"
// import { login } from './middlewares/auth'
// Routes
var images_routes_1 = __importDefault(require("./routes/images.routes"));
// App start
var app = (0, express_1.default)();
// Middlewares
// app.use(cors())
// app.use(morgan("dev"))
app.use(express_1.default.json());
//Routes
app.use("/api", images_routes_1.default);
// Server Start
if (config.env == "D") {
    app.listen(config.port);
    console.log("Serving on port " + config.port);
}
else {
    var httpsServerOptions = {
        cert: fs_1.default.readFileSync("./certificados/_.kenwin.net.crt"),
        key: fs_1.default.readFileSync("./certificados/_.kenwin.net.key")
    };
    https_1.default.createServer(httpsServerOptions, app).listen(config.port);
    console.log("HTTPS Serving on port " + config.port);
}
