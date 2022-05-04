import mongoose  from 'mongoose';
function dbconnect(){
    return mongoose.connect(process.env.LOCALDATABASE as string,{
        useNewUrlParser: true,
        useUnifiedTopology: true,

    } as object).then(()=> console.log('MongoDb Connected')).catch(e => console.log(e));
}
export  default dbconnect;