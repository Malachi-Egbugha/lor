import lorModel,{lorDocument} from './model';
export async function createLor(input: lorDocument){
    try
    {
        return await lorModel.create(input);
    }
    catch(e:any){
        console.log(e);
        throw new Error("Error in creating Lor record please contact administrator");
    }

}

export async function readlor(query: any){
    console.log(query);
    try{
    return await lorModel.find(query).sort({createdAt: -1});
    }
    catch(e:any){
        throw new Error("Error in reading Lor record please contact administrator");

    }
}

export async function updatelor(id: any, update:any){
    try{
    return await lorModel.findByIdAndUpdate({ _id: id },update,{new: true});
    }
    catch(e:any){
        throw new Error("Error in updating Lor record please contact administrator");

    }

}

