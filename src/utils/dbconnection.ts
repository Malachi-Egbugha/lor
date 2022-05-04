import mongoose  from 'mongoose';
function dbconnect(){
    return mongoose.connect(process.env.LOCALDATABASE as string).then(()=> console.log('MongoDb Connected')).catch(e => console.log(e));
}
export  default dbconnect;