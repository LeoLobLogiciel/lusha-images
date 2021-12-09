"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var images_controller_1 = require("../controllers/images.controller");
var router = (0, express_1.Router)();
router.get('/images', images_controller_1.getImages_controller);
exports.default = router;
