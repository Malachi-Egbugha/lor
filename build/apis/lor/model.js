"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const lorSchema = new mongoose_1.Schema({
    CustomerAccountNumber: { type: String, required: true },
    CustomerMeterNumber: { type: String, required: true },
    CustomerDistrict: { type: String, required: true },
    CustomerFeeder: { type: String, required: true },
    Address: { type: String, required: true },
    Tariff: { type: String, required: true },
    Lornumber: { type: String, required: true },
    Loramount: { type: Number, required: true },
    ReconnectionCost: { type: Number, required: true },
    LossOfRevenue: { type: Number, required: true },
    CostOfDamagedMeter: { type: Number, required: true },
    AdminCharge: { type: Number, required: true },
    AgreedNumberOfInstallment: { type: Number, required: true },
    MeterType: { type: String, required: true },
    isMeterDamage: { type: Boolean, required: true },
    isMeterBypassed: { type: Boolean, required: true },
    NumberOfMonthsIllegal: { type: Number, required: true },
    Status: { type: String, required: true },
    Createdby: { type: String, required: true },
    ProcessingStatus: { type: String, required: true },
    ProcessingDate: Date,
    ProcessedBy: String,
}, {
    timestamps: true,
});
const lorModel = (0, mongoose_1.model)("lor", lorSchema);
exports.default = lorModel;
