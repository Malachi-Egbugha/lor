import {Schema, model} from "mongoose";
export interface lorDocument {
CustomerAccountNumber: string;
CustomerMeterNumber: string;
CustomerDistrict: string;
CustomerFeeder: string;
Address: string;
Tariff: string;
Lornumber: string;
Loramount: number;
ReconnectionCost: number;
LossOfRevenue: number;
CostOfDamagedMeter: number;
AdminCharge: number;
AgreedNumberOfInstallment: number;
MeterType: string;
isMeterDamage: boolean;
isMeterBypassed: boolean;
NumberOfMonthsIllegal: number;
Status: string;
Createdby: string;
ProcessingStatus: string;
ProcessingDate?: Date;
ProcessedBy?: string;
}

const lorSchema = new Schema({
CustomerAccountNumber: {type: String, required: true},
CustomerMeterNumber: {type: String, required: true},
CustomerDistrict: {type: String, required: true},
CustomerFeeder: {type: String, required: true},
Address: {type: String, required: true},
Tariff: {type: String, required: true},
Lornumber: {type: String, required: true},
Loramount: {type: Number, required: true},
ReconnectionCost: {type: Number, required: true},
LossOfRevenue: {type: Number, required: true},
CostOfDamagedMeter: {type: Number, required: true},
AdminCharge: {type: Number, required: true},
AgreedNumberOfInstallment: {type: Number, required: true},
MeterType: {type: String, required: true},
isMeterDamage: {type: Boolean, required: true},
isMeterBypassed: {type: Boolean, required: true},
NumberOfMonthsIllegal: {type: Number, required: true},
Status: {type: String, required: true},
Createdby: {type: String, required: true},
ProcessingStatus: {type: String, required: true},
ProcessingDate: Date,
ProcessedBy: String,

},
{
    timestamps: true,

})
const lorModel = model("lor",lorSchema)
export default lorModel;

