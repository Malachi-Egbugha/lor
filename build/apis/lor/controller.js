"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLorHandler = exports.readallLorHandler = exports.createLorHandler = void 0;
const services_1 = require("./services");
function createLorHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const queryresult = yield (0, services_1.createLor)(req.body);
            res.json({ queryresult, status: true });
        }
        catch (e) {
            res.json({ status: false, msg: e.message });
        }
    });
}
exports.createLorHandler = createLorHandler;
function readallLorHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let query = {};
        try {
            const queryresult = yield (0, services_1.readlor)(query);
            res.json({ queryresult, status: true });
        }
        catch (e) {
            res.json({ status: false, msg: e.message });
        }
    });
}
exports.readallLorHandler = readallLorHandler;
function updateLorHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { id } = req.params;
        try {
            const queryresult = yield (0, services_1.updatelor)(id, req.body);
            res.json({ queryresult, status: true });
        }
        catch (e) {
            console.log(e);
            res.json({ status: false, msg: e.message });
        }
    });
}
exports.updateLorHandler = updateLorHandler;
