import  {Request, Response} from 'express';
import {createLor,readlor, updatelor} from './services';
export async function createLorHandler(req:Request, res:Response){
   
    try{

        const queryresult = await createLor(req.body);
        res.json({queryresult, status:true});

    }
    catch(e:any){
        res.json({status: false, msg:e.message});

    }

}

export async function readallLorHandler(req: Request, res:Response){
    let query = {}; 
    try{
        const queryresult = await readlor(query);
        res.json({queryresult, status:true});
    }
    catch(e:any){
        res.json({status: false, msg:e.message});

    }

}

export async function updateLorHandler(req: Request, res:Response){
    let {id} = req.params;
    
    try{
        const queryresult = await updatelor(id,req.body);
        res.json({queryresult, status:true});

    }
    catch(e:any){
        console.log(e);
        res.json({status: false, msg:e.message});


    }
   

}
