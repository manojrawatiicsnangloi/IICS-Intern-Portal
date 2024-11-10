import mongoose from 'mongoose';

const connectionToDatabase = async ()=>{
    const dbUri = 'mongodb://0.0.0.0:27017/internportal';
    try{
        const connection = await mongoose.connect(dbUri);
        console.log("conected to database");
    }
    catch(err){
        console.log(err);
    }
}

export default connectionToDatabase;