import "reflect-metadata";
import { connectionDB } from 'databases'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 8001;

connectionDB
    .then(async connection => {
        if (connection.isConnected) {
            console.log("Connected Database successfully");
        }
    })
    .catch((error) => {
        console.log(error);
    })

// Use express middleware libraly
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`APP is running on PORT ${PORT}`);
})