import express from "express";
import {config} from "dotenv";
import cors from 'cors'
import {database} from "./database/database.js";
import router from "./routers/routers.js";
import {RealtyModel} from "./models/RealtyModel.js";
import {TypeRealtyModel} from "./models/TypeRealtyModel.js";

config()

const app = express();

const PORT = process.env["PORT_API"] || 6000;
export const UTC_TIME = eval(String(process.env["UTC_TIME"]))

app.use(express.json())
app.use(cors(
    {
        credentials: true,
        origin: process.env["CLIENT_URL"]
    }
))
app.use('/api', router)

// database.sync({alter: true}).then(async () => {
//     await RealtyModel.findAll()
//     await TypeRealtyModel.findAll()
//     console.log('Connection has been established successfully.');
// }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
// });

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`SERVER OK on PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()