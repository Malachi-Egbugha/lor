import mongoose  from 'mongoose';
//const mongoose = require('mongoose');
function dbconnect(){
    return mongoose.connect(process.env.PRODDB as string,{
        useNewUrlParser: true,
        useUnifiedTopology: true,

    } as object).then(()=> console.log('MongoDb Connected')).catch((e:string) => console.log(e));
}
export  default dbconnect;