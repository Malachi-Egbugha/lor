import supertest from 'supertest';
import app from '../app';

const testpostdata = {
    CustomerAccountNumber: "1234567",
CustomerMeterNumber: "34457",
CustomerDistrict: "abakpa",
CustomerFeeder: "aba",
Address: "enugu",
Tariff: "2345",
Lornumber: "345",
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
Createdby: 14/56/78,
ProcessingStatus: "wating"
}
    describe("test for lor",() =>{
        describe("test for get all lor route",()=>{
            test("should return a 404", async () =>{
               const response = await supertest(app).get('/api/v1/lor/readalllor');
               expect(response.statusCode).toBe(200);
               expect(response.body.status).toEqual(true);
            })
        })
        describe("test for create lor",()=>{
            test("should return 200 and has property queryresult", async () =>{
               const response = await supertest(app).post('/api/v1/lor/create').send(testpostdata);
               expect(response.statusCode).toBe(200);
               expect(response.body.status).toEqual(true);
               expect(response.body).toHaveProperty("queryresult");
            })
        }) 
    }) 


//not.toBeNull