"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var images_controller_1 = require("../controllers/images.controller");
var router = (0, express_1.Router)();
router.get('/images', images_controller_1.getAllImages_controller);
router.get('/images/:page/:pageSize', images_controller_1.getPaginatedImages_controller);
exports.default = router;
