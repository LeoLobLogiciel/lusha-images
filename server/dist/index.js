"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config = require("../config");
// Import routes
var images_routes_1 = __importDefault(require("./routes/images.routes"));
// App start
var app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
// Using routes
app.use('/api', images_routes_1.default);
// Server Start
app.listen(config.port);
console.log('Serving on port ' + config.port);
