import express from 'express';
import dotenv from 'dotenv';
import "./config.js";
import connectDb from "./db-connect.js";


dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });


