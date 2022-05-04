import express, {Application} from 'express';
import cors from 'cors';
import axios from 'axios';
import * as redis from 'redis'; 
import apis from '../apis';
import {apiauthorize} from '../middleware/routeprotection';
function createServer(){
const app:Application = express();
app.use(cors());
app.use(express.json()); 
const redisUrl:any = process.env.REDIS;
const redisClient = redis.createClient(redisUrl);
(
    async () =>{
        try{
        await redisClient.connect();
        console.log('Redis is connected');
        }
        catch(e){
            console.log(e);
        }
    }
)()
app.get('/getcustomer/:accountnumber',apiauthorize, async  (req,res) =>{
    const {accountnumber} = req.params;
    const data = {};
    const config = {
      method: 'get',
      url: `${process.env.REMOTEEEDCCONNECTURL}/${accountnumber}`,
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'accesstoken': `${process.env.ACCESSTOKEN}`
      },
      data : data
    };
    
    try{
        const redisdata = await redisClient.get(accountnumber);
        
        if(redisdata){
            res.json({queryresult: JSON.parse(redisdata), status: true});
    
        }
        else{
        let response =await axios(config);
        await redisClient.setEx(accountnumber, 259200,JSON.stringify(response.data));
        res.json({queryresult: response.data, status: true});
        }
    
    
    }
    catch(e){
        console.log(e);
        res.json({msg:'Error in catching Lor record please contact administrator', status: false});
    }
    
    
    
    })
    app.use('/api/v1', apis);
return app;
}
export default createServer;