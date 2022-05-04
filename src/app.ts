import dotenv from 'dotenv';
import createServer from './utils/server';
import dbconnection from './utils/dbconnection';
dotenv.config();
dbconnection();
const app = createServer();
//middlewares
const port = process.env.PORT || 5060;
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`);
})

export default app;