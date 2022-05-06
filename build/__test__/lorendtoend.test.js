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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const testpostdata = {
    CustomerAccountNumber: "1234567",
    CustomerMeterNumber: "34457",
    CustomerDistrict: "abakpa",
    CustomerFeeder: "aba",
    Address: "enugu",
    Tariff: "2345",
    Lornumber: "345",
    DtName: "james",
    Loramount: 500,
    ReconnectionCost: 800,
    LossOfRevenue: 500,
    CostOfDamagedMeter: 700,
    AdminCharge: 567,
    AgreedNumberOfInstallment: 200,
    MeterType: "map",
    isMeterDamage: false,
    isMeterBypassed: true,
    NumberOfMonthsIllegal: 5,
    Status: "pending",
    Createdby: 14 / 56 / 78,
    ProcessingStatus: "wating"
};
let lornumber = 1651841092255;
describe("test for read lor route", () => {
    describe("test for get all and bylor lor route", () => {
        test("should return status code 200", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default).get('/api/v1/lor/readalllor');
            expect(response.statusCode).toBe(200);
            expect(response.body.status).toEqual(true);
        }));
        test("should return status code 200", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default).get(`/api/v1/lor/readalllor/${lornumber}`);
            expect(response.statusCode).toBe(200);
            expect(response.body.status).toEqual(true);
        }));
    });
    describe("test for create lor", () => {
        test("should return 200 and has property queryresult", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app_1.default).post('/api/v1/lor/create').send(testpostdata);
            expect(response.statusCode).toBe(200);
            expect(response.body.status).toEqual(true);
            expect(response.body).toHaveProperty("queryresult");
        }));
    });
});
//not.toBeNull
