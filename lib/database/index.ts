import mongoose, {Mongoose} from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConn {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached : any = (global as any).mongoose;




export const connectToDatabase = async()=>{
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI)  throw new Error('MONGODB_URI is missing');
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI , {
        dbName:'EventOrg',
        bufferCommands: false,
        connectTimeoutMS: 30000
    })

    cached.conn = await cached.promise;
    return cached.conn;
}
// server connections
// connectToDatabase