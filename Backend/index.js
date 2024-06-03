import express from "express";
import mongoose from "mongoose";
import {PORT, MONGO_URL} from "./config.js";
import HospitalRoute from "./routes/HospitalRoutes.js"
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.use("/record", HospitalRoute);

mongoose.
connect(MONGO_URL).then(()=> {
    console.log("Database is connected");
    app.listen(PORT, ()=> {
        console.log(`Server is connected on PORT ${PORT}`);
    })
}).catch((error)=> {
    console.log(error);
})