import mongoose from "mongoose";
mongoose.set('strictQuery', false);



export const connectDB = () => {

    const MONGODB_URL = 'mongodb+srv://Dhruv:Dhruv%4027@cluster0.htvjmjc.mongodb.net/?retryWrites=true&w=majority';

    if (!MONGODB_URL) {
        console.log('MONGODB_URL Not Found in ENV');
        process.exit(1);
      }


    mongoose
        .connect(MONGODB_URL)
        .then(() => {
            console.log('DB CONNECTED SUCCESSFULLY');
        })
        .catch((error) => {
            console.log('DB CONNECTION FAILED');
            console.log(error);
            process.exit(1);
        })

}