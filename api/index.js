import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();

const app = express();

// connection to Database 
// mongoose.connect(process.env.MONGO).then(()=>{
//     console.log("MongoDB is connected Successfully..");
// }).catch(err =>{
//     console.log(err)
// })
mongoose.connect(process.env.MONGO1).then(()=>{
    console.log("MongoDB is connected Successfully..");
}).catch(err =>{
    console.log(err)
})



app.use(express.json());


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, ()=>{
    console.log("Server is running on port is 3000 !");
})

