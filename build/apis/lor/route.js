"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.post('/lor/create', controller_1.createLorHandler);
router.get('/lor/readalllor/:lornumber?', controller_1.readallLorHandler);
router.put('/lor/updatelor/:id', controller_1.updateLorHandler);
exports.default = router;
