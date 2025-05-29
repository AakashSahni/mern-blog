import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'

dotenv.config();

const app = express();

// connection to Database 
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDB is connected Successfully..");
}).catch(err =>{
    console.log(err)
})


app.use("/api/user", userRouter);

app.listen(3000, ()=>{
    console.log("Server is running on port is 3000 !");
})

