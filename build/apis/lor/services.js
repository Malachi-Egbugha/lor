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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatelor = exports.readlor = exports.createLor = void 0;
const model_1 = __importDefault(require("./model"));
function createLor(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //create lor number
            input.Lornumber = new Date().valueOf();
            return yield model_1.default.create(input);
        }
        catch (e) {
            console.log(e);
            throw new Error("Error in creating Lor record please contact administrator");
        }
    });
}
exports.createLor = createLor;
function readlor(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield model_1.default.find(query).sort({ createdAt: -1 });
        }
        catch (e) {
            throw new Error("Error in reading Lor record please contact administrator");
        }
    });
}
exports.readlor = readlor;
function updatelor(id, update) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield model_1.default.findByIdAndUpdate({ _id: id }, update, { new: true });
        }
        catch (e) {
            throw new Error("Error in updating Lor record please contact administrator");
        }
    });
}
exports.updatelor = updatelor;
