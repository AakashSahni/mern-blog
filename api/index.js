import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cors from 'cors';

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

app.use(cors());


app.use(express.json());


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


//middleware
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on port is 3000 !");
})

